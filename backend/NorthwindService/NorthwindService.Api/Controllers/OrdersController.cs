using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using NorthwindService.Domain.Models;
using NorthwindService.Services.Interfaces;

namespace NorthwindService.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ODataController
    {
        private readonly INorthwindService _northwindService;

        public OrdersController(INorthwindService northwindService)
        {
            _northwindService = northwindService;
        }

        [EnableQuery]
        [HttpGet(nameof(GetSummary))]
        public IQueryable<ProductSummary> GetSummary()
        {
            return _northwindService.GetProductSuppplierQuantityAggragation();
        }
    }
}
