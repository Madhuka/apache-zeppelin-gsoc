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
        $scope.loadCarDatatoNVD3 = function(fileName, labelx) {
            console.log($scope.data[0].values)
            d3.csv("data/" + fileName + ".csv", function(d) {

                return {
                    label: d[labelx],
                    value: +d.Length,
                    valuex: +d.No
                }
            }, function(error, rows) {
                $scope.data[0].values = rows;
            });

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
            var nvdLabels = ["A", "B", "C", "D"];
            $scope.options.chart.xAxis = {
                'axisLabel': 'Models'
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
    }
]);