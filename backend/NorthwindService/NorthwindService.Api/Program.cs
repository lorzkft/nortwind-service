using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using NorthwindModel;
using NorthwindService.Api.Extensions;

var DevelopmentSpecificOrigins = "_developmentSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntityType<Product>();

builder.Services.AddControllers().AddOData(
    options => options.Select().Filter().OrderBy().Expand().Count().SetMaxTop(null).AddRouteComponents(
        "odata",
        modelBuilder.GetEdmModel()));

builder.Services
    .AddEndpointsApiExplorer()
    .AddSwaggerGen()
    .AddConfigurations(builder.Configuration)
    .AddNorhtwindServices(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy(DevelopmentSpecificOrigins,
        policy =>
        {
            policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(DevelopmentSpecificOrigins);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
