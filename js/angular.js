angular.module("Packages1",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl1",function($scope) //This works as a controller
{ 
    var courses = [
        {Name:'Krishna Bansal', Course : 'MCA123',Session : 2021, Quiz_date:new Date("January 31 2022") ,Marks:98,Grades:"O",Teacher_comment:"excellent"},
        {Name:'Rachit Desai',Course : 'MCA214' ,Session : 2020 , Quiz_date:new Date("February 12 2022"),Marks:95,Grades:"O",Teacher_comment:"excellent"},
        {Name:'Aayush Ranjan', Course : 'BCA121',Session : 2019 , Quiz_date:new Date("February 21 2022"),Marks:89,Grades:"O",Teacher_comment:"good"},
        {Name:'Ravi Prakash', Course : 'MCA142',Session : 2018 , Quiz_date:new Date("March 10 2022"),Marks:99,Grades:"O",Teacher_comment:"outstanding"},
        {Name:'Janet Deo', Course : 'MCA101',Session : 2017, Quiz_date:new Date("January 12 2022"),Marks:86,Grades:"O",Teacher_comment:"good"},
        {Name:'Gyan Ranjan', Course : 'BCA124',Session : 2020 , Quiz_date:new Date("April 1 2022"),Marks:89,Grades:"O",Teacher_comment:"good"},
        {Name:'Pankaj Tripathi', Course : 'MCA125',Session : 2019 , Quiz_date:new Date("April 2 2022"),Marks:87,Grades:"O",Teacher_comment:"good"}
    ];
    $scope.courses = courses;
    $scope.rowlimit = 7;
});