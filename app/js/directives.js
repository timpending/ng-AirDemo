app.directive("donutChart", ['AddressSearchService', function(AddressSearchService) {
  function link(scope, el) {
    let testData = [
      {
        label: "Occupied Days",
        value: AddressSearchService.results.occ_predicted.ltm
      },
      {
        label: "Non-Occupied Days",
        value: 1-AddressSearchService.results.occ_predicted.ltm
      }
    ]

    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

      d3.select("#chart svg")
          .datum(testData)
          .transition().duration(1200)
          .call(chart);

    return chart;
  }
    return {
      link:link,
      restrict: 'E',
      scope: {data: '='}
    }
}])
