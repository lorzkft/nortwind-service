using NorthwindModel;
using NorthwindService.Domain.Models;

namespace NorthwindService.Services.Interfaces
{
    public interface INorthwindService
    {
        IQueryable<Product> GetProducts();
        IQueryable<ProductSummary> GetProductSuppplierQuantityAggragation();
    }
}