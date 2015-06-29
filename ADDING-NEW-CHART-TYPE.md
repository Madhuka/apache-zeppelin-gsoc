# Adding New Chart Type
**Global Chart Factory** have generic chart model and each chart library have it is own factory and it is extended the Global Chart Factory. So all Supporting  chart is listed can be found in it's own factory. 

##Pre-request
Chart Factory is needed to define correctly.

##Steps to be followed
1. Supporting chart types need to define in ChartList array as below. You can add new hart types in there. If you need any data level transformation for chart you can define it in `Factory`. 
```javascript
var ChartList = {
  'Bar': 'BarChart',
  'Line': 'LineChart'
};
```
  1.2. Develop the rest of method you need from you charting library

2. Update the configure file for new chart type. Update 'chartTypes' as below.
```javascript
  'chartTypes': ['Line', 'Bar']
```
Make sure you add same key for `ChartList` in chart library factory.

##Build, Test and Run
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

