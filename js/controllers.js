var chartControllers = angular.module('chartControllers', ['googlechart', 'nvd3', 'highcharts-ng']);

chartControllers.controller('chartCtrl', ['$scope',
    function($scope) {
        //sample csv file name 
        $scope.fileName = 'car';
        $scope.chartType = 'HighChart';

        //csv file data is load for all charts libraries
        $scope.loadData = function() {
            console.log('ccccssccc');
            fileName = $scope.fileName
            //loadFile(fileName);
            $scope.loadCarDatatoHighChart(fileName);

        };



        //setting high chart labels and data seriees 
        $scope.loadCarDatatoHighChart = function(fileName) {
            console.log('cccc');
            renderChart(highxChart, data);
        };

        //setting ncd3 labels and data 
        $scope.loadCarDatatoNVD3 = function(fileName) {
            loadYAxisLabel(fileName);
            renderChart(NVD3Chart, data);
            $scope.options.chart.xAxis = {
                'tickFormat': function(d) {
                    return nvd3AxisLabels[d]
                }
            };

        };

        //setting google chart labels and data 
        $scope.loadCarDatatoGoogle = function(fileName) {
            renderChart(googlexChart, data);
        };

        //getDataing highchart sample 
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

        $scope.drawChart = function() {
            console.log('drawChart....')
                //getData('car');

            renderChart(NVD3Chart, data);
            // 
            //renderChart(highxChart, data); 

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
                //console.log(rows);
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

        //NVD3 Chart 

        function getData(fileName) {
            return d3.csv("data/" + fileName + ".csv")
        };        

        function getNVD3(error, rows) {
            $scope.data[0].values = rows;
        };

        function nvd3Model(d) {
            return {
                label: d.Make,
                value: +d.Length,
                valuex: +d.No
            }
        };

        var NVD3Chart = {
            model: nvd3Model,
            get: getNVD3
        };

        //google chart
        function googleChartModel(d) {
            return {
                c: [{
                    v: d.Make
                }, {
                    v: +d.Length
                }]
            }
        };

        function getGoogleChart(error, rows) {
            $scope.chart.data.rows = rows;
        };

        var googlexChart = {
            model: googleChartModel,
            get: getGoogleChart
        };

        //high chart
        function highChartModel(d) {
            return +d.Length;
        };      

        function getHighChart(error, rows) {
            $scope.chartConfig.series[0].data = rows;
        };
        var highxChart = {
            model: highChartModel,
            get: getHighChart
        };
        //var chartPipe = getData(fileName).row(nvd3Model).get(getNVD3);
        var data = getData('car');

        

        function renderChart(chart, data) {
            //console.log('drawing....')
            data.row(chart.model).get(chart.get)
        };


    }
]);