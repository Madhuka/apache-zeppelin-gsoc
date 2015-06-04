var chartControllers = angular.module('chartControllers', ['googlechart', 'nvd3', 'highcharts-ng']);

chartControllers.controller('chartCtrl', ['$scope',
    function($scope) {
        //sample csv file name 
        $scope.fileName = 'car';

        //csv file data is load for all charts libraries
        $scope.loadData = function() {
            fileName = $scope.fileName
            console.log(loadFile(fileName));
            $scope.loadCarDatatoHighChart(fileName);
            $scope.loadCarDatatoNVD3(fileName);
            $scope.loadCarDatatoGoogle(fileName);
        };



        //setting high chart labels and data seriees 
        $scope.loadCarDatatoHighChart = function(fileName) {
            console.log($scope.chartConfig.series[0].data)
            d3.csv("data/" + fileName + ".csv", function(d) {

                return d.Make;
            }, function(error, rows) {
                $scope.chartConfig.xAxis.categories = rows;
            });
            d3.csv("data/" + fileName + ".csv", function(d) {

                return +d.Length;
            }, function(error, rows) {
                console.log(rows);
                $scope.chartConfig.series[0].data = rows;
            });
        };

        //setting ncd3 labels and data 
        $scope.loadCarDatatoNVD3 = function(fileName) {
            loadYAxisLabel(fileName);
            d3.csv("data/" + fileName + ".csv", function(d) {

                return {
                    label: d.Make,
                    value: +d.Length,
                    valuex: +d.No
                }
            }, function(error, rows) {
                $scope.data[0].values = rows;
            });
            $scope.options.chart.xAxis = {
                'tickFormat': function(d) {
                    return nvd3AxisLabels[d]
                }
            };

        };

        //setting google chart labels and data 
        $scope.loadCarDatatoGoogle = function(fileName) {
            console.log($scope.chart.data)
                //cols
            d3.csv("data/" + fileName + ".csv", function(d) {

                return {
                    c: [{
                        v: d.Make
                    }, {
                        v: +d.Length
                    }]
                }
            }, function(error, rows) {
                console.log(rows);
                $scope.chart.data.rows = rows;
            });

        };

        //getting highchart sample 
        $scope.chartConfig = highchart.chartConfig;

        //getting nvd3 chart sample
        $scope.options = ncd3Chart1.options;
        $scope.data = ncd3Chart1.data;

        //getting google chart sample
        $scope.chart = googleChart;

        //Switch all chart libaraies chart types at one
        $scope.switchChartType = function(gchartType, hchartType, dchartType) {
            $scope.chart.type = gchartType;
            $scope.chartConfig.options.chart.type = hchartType;
            $scope.options.chart.type = dchartType;
            //nvd3             
            loadYAxisLabel($scope.fileName);
            var nvdLabels = nvd3AxisLabels;
            $scope.options.chart.xAxis = {
                'axisLabel': 'Make'
            };
            $scope.options.chart.xAxis = {
                'tickFormat': function(d) {
                    return nvdLabels[d]
                }
            };
            
        };

        //switching chart libraries
        $scope.switchChartLib = function(chartLib) {
            $scope.highChartChartShow = false;
            $scope.googlrChartShow = false;
            $scope.nvd3Show = false;
            $scope[chartLib] = true;
        };

        //End of the scope level
        var nvd3AxisLabels = {};

        //loading csv file data set for chart
        loadFile = function(fileName) {

            d3.csv("data/" + fileName + ".csv", function(d) {
                return {
                    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date 
                    make: d.Make,
                    model: d.Model,
                    length: +d.Length // convert "length" column to number
                };
            }, function(error, rows) {
                console.log(rows);
            });
        };        
        //nvd3 chartting 
        loadYAxisLabel = function(fileName) {

            d3.csv("data/" + fileName + ".csv", function(d) {
                return d.Make;
            }, function(error, rows) {
                //console.log(rows);
                nvd3AxisLabels = rows;
            });
        };
    }
]);