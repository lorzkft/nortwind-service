using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using NorthwindModel;
using NorthwindService.Api.Attributes;
using NorthwindService.Services.Interfaces;

namespace NorthwindService.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ODataController
    {
        private readonly INorthwindService _northwindService;

        public ProductsController(INorthwindService northwindService)
        {
            _northwindService = northwindService;
        }

        [EnableQueryWithMetadata]
        [HttpGet(nameof(Get))]
        public IQueryable<Product> Get()
        {
            return _northwindService.GetProducts();
        }
    }
}
