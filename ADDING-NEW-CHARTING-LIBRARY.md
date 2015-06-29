# Adding New Chart Library
**Global Chart Factory** have generic chart model and each chart library have it is own factory. Therefore when you adding new chart library you have to extended the Global Chart Factory.

##Pre-request
Need to add new JS charting library for the project or application.

 * `bower install <library name> --save`

This command update your bower.json and index html

##Steps 
1. Create a new factory inside the **chart-factory** with extending Global Chart Factory.

```javascript
angular.module('apacheZeppelinGsocApp').factory('MyNewChartFactory', function(
  ChartFactory) {

  //extending common chart model
  var MyNewChartFactory = new ChartFactory('NewChartLibraryName', newChart);

  //To-Do Implement or add new chart 
});
```
1.1. Supporting chart types need to define in ChartList array as below
```javascript
var ChartList = {
  'Bar': 'BarChart',
  'Line': 'LineChart'
};
```
1.2. Develop the rest of method you need from you charting library

2. Factories are expose from **ChartService**. Therefore you can add new services (only one method) that is using new factory.

```javascript
  this.getNewChart = function(chartType) {
    var myChart = MyNewChartFactory;
    myChart.setChartType(chartType);
    return myChart;
  };  
```

3. Update the configure file for new chart library. Update 'libraryName' as below. Add template for views

```javascript
  'library': 'highChart',
  'service': 'getHighChart',
  'template': 'views/charts/highchart.html'
```

Run
 * `npm install` first, If you hav not run it before.
 * `bower install` will download new library for application.

### Build the application

`./grunt build`

Run `grunt build` for building 

### Preview Web application

`./grunt serve` 

This will launch a WebApplication on port **9000** and update on code changes.

### Testing

`./grunt test` 

