using NorthwindService.Core;
using NorthwindService.Core.Extensions;
using NorthwindService.Services.Interfaces;
using ODataWebExperimental.Northwind.Model;

namespace NorthwindService.Api.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddConfigurations(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<NorthwindConfiguration>(configuration.GetSection(NorthwindConfiguration.NorthwindConfigurationSectionName));

            return services;
        }

        public static IServiceCollection AddNorhtwindServices(this IServiceCollection services, IConfiguration configuration)
        {
            var northwindConfiguration = configuration.GetNorthwindConfiguration();

            return services
                .AddTransient(serviceProvider => new NorthwindEntities(northwindConfiguration.RootUri))
                .AddTransient<INorthwindService, Services.NorthwindService>();
        }
    }
}
