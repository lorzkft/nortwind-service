namespace NorthwindService.Core
{
    public class NorthwindConfiguration
    {
        public const string NorthwindConfigurationSectionName = nameof(NorthwindConfiguration);
        public Uri? RootUri { get; set; }
    }
}