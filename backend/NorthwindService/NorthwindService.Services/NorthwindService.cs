using NorthwindModel;
using NorthwindService.Domain.Models;
using NorthwindService.Services.Interfaces;
using ODataWebExperimental.Northwind.Model;

namespace NorthwindService.Services
{
    public class NorthwindService : INorthwindService
    {
        private readonly NorthwindEntities _northwindEntities;

        public NorthwindService(NorthwindEntities northwindEntities)
        {
            _northwindEntities = northwindEntities ?? throw new ArgumentNullException(nameof(northwindEntities));
        }

        public IQueryable<Product> GetProducts()
        {
            return _northwindEntities.Products
                .Expand(p => p.Category)
                .Expand(p => p.Supplier);
        }

        public IQueryable<ProductSummary> GetProductSuppplierQuantityAggragation()
        {
            // Workaround: Northwind service does not support $apply OData command so the result should be queried before grouping and aggregation
            var data = _northwindEntities.Order_Details.Select(od => new { od.Product.ProductName, od.ProductID, od.Product.Supplier.CompanyName, od.Product.SupplierID, SumValue = (double)od.Quantity * (double)od.UnitPrice * (double)od.Discount }).ToList();
            return data.GroupBy(d => new { d.SupplierID, d.ProductID, d.ProductName, d.CompanyName }).Select(g => new ProductSummary(g.Key.ProductID, g.Key.SupplierID, g.Key.ProductName, g.Key.CompanyName, g.Sum(x => x.SumValue))).AsQueryable();
        }
    }
}