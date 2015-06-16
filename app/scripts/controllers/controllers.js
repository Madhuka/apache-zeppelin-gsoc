var chartControllers = angular.module('chartControllers', ['googlechart', 'nvd3', 'highcharts-ng']);


chartControllers.controller('chartCtrl', ['$scope', '$location', 'Datax',
    function($scope, $location, Datax) {
        



        //csv file data is load for all charts libraries
        $scope.loadData = function(fileName) {   
            //console.log("loading data "+fileName);
            data = getData(fileName);
            console.log(data);
            $scope.setActive('b1',fileName);
            //$scope.Datax = Datax;
            console.log(Datax)
            loadYAxisLabel(fileName);
            $scope.a = true;
            drawChart();
        };

                //default one 
        var myChart = {};
       
        $scope.loadChartLibrary = function(libraryIndex) {   
            myChart = libraryName[libraryIndex];            
            switchChartLib(myChart.library);
            $scope.setActive('b2',myChart.library);
            $scope.b = true;
            drawChart();
            
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
            $scope.setActive('b3',hchartType);
            //nvd3             
            loadYAxisLabel($scope.fileName);
            var nvdLabels = nvd3AxisLabels;            
            $scope.options.chart.xAxis = {
                'axisLabel': 'Make',
                'tickFormat': function(d) {
                    return nvdLabels[d]
                }
            };

        };

        //deafult button picker
        $scope.active={'b1':false,'b2':false,'b3':'bar'};

        $scope.setActive = function(set,type) {
            $scope.active[set] = type;
        };

        $scope.isBActive = function(set,type) {
           return $scope.active[set] === type;
        };
        
        function switchChartLib (chartLib) {
            console.log('switchChartLib to '+chartLib);
            $scope.highxChart = false;
            $scope.googlexChart = false;
            $scope.NVD3Chart = false;
            $scope[chartLib] = true;
        };

        function drawChart() {   
            console.log('draw the chart '+myChart.library);
            if(myChart.model != null) {           
                renderChart(myChart.model, data);
                            //nvd3 axis update
            $scope.options.chart.xAxis = {
                'tickFormat': function(d) {
                    return nvd3AxisLabels[d]
                }
            };
        }

        };
        var nvd3AxisLabels = {};

        
        //nvd3 chartting 
        function loadYAxisLabel(fileName) {
            nvd3AxisLabels = getData(fileName).row(nvd3YaxisModel).get(getNVD3Yaxis);
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

        function getNVD3Yaxis(error, rows) {
            nvd3AxisLabels = rows;
        };

        function nvd3YaxisModel(d) {
            return d.Make;
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
        

        

        function renderChart(chart, data) {
            console.log('drawing....')
            data.row(chart.model).get(chart.get)
        };

        libraryName = [ { 'library': 'NVD3Chart', 'model':NVD3Chart}, { 'library':'highxChart', 'model':highxChart}, { 'library': 'googlexChart','model':googlexChart}];
        chartTypes = ["Line","Bar"];
    }
]);