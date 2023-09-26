using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NorthwindService.Domain.Models
{
    public class ProductSummary
    {
        public ProductSummary(int productID, int? supplierID, string productName, string companyName, double sumValue)
        {
            ProductID = productID;
            SupplierID = supplierID;
            ProductName = productName;
            CompanyName = companyName;
            SumValue = sumValue;
        }

        public int ProductID { get; set; }
        public int? SupplierID { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public double SumValue { get; set; }
    }
}
