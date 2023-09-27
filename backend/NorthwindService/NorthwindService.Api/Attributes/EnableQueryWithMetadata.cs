using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData.Query;
using System.Text.Json.Serialization;

namespace NorthwindService.Api.Attributes
{
    public class EnableQueryWithMetadataAttribute : EnableQueryAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);

            if (actionExecutedContext.Result is ObjectResult obj && obj.Value is IQueryable qry)
            {
                obj.Value = new ODataResponse
                {
                    Count = actionExecutedContext.HttpContext.Request.ODataFeature().TotalCount,
                    NextLink = actionExecutedContext.HttpContext.Request.ODataFeature().NextLink,
                    Value = qry
                };
            }
        }
        public class ODataResponse
        {
            [JsonPropertyName("@odata.count")]
            public long? Count { get; set; }

            [JsonPropertyName("@odata.nextLink")]
            public Uri NextLink { get; set; }

            [JsonPropertyName("value")]
            public IQueryable Value { get; set; }
        }
    }
}
