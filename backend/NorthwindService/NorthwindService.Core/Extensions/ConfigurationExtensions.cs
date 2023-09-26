using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NorthwindService.Core.Extensions
{
    public static class ConfigurationExtensions
    {
        public static NorthwindConfiguration GetNorthwindConfiguration(this IConfiguration configuration)
        {
            var config = new NorthwindConfiguration();
            configuration.GetSection(NorthwindConfiguration.NorthwindConfigurationSectionName).Bind(config);
            return config;
        }
    }
}
