angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/events',
    {
        templateUrl:'christ/events.html',
        controller:'eventsctrl'
    }).when('/stadiums',
    {
        templateUrl:'christ/stadiums.html',
        controller:'stadiumsctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse."
    
})
.controller("eventsctrl",function($scope)
{
   $scope.events=["STADIUMS","VISIT US AT : Stadiums.in","010-11009988","review us at stadiums@gmail.com"]; 
})
.controller("stadiumsctrl",function($scope,$http)
{
    $http.get('https://raw.githubusercontent.com/GauriKanodia16/spa/main/stadiums.json')
    .success(function(response)
    {
        $scope.stadiums=response.aboutUs;
    });
});
