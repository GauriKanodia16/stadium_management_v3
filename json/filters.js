
var evtMS = angular.module("evtMS", [])
evtMS.controller("evtMSCtrl", ($scope, $http)=>{

    //retrieve JSON file
    $http.get("https://raw.githubusercontent.com/GauriKanodia16/events-JSON/main/events.json")
    .success((response)=>{
        $scope.events = response
    })
})

//email validation filter
evtMS.filter("validateEmail", ()=>{
    return (input)=>{
        document.getElementById(input).style.color = "white"
        if((/^([a-z0-9_\.]+)@(([a-z0-9]+)\.)([a-z]{2,3})$/).test(input))
        {
            document.getElementById(input).style.backgroundColor = "green"
            return input
        }
        document.getElementById(input).style.backgroundColor = "red"
        return input
    }
})

//phone validation filter
evtMS.filter("validatePhone", ()=>{
    return (input)=>{
        document.getElementById(input).style.color = "white"
        if((/^[0-9]{10}$/).test(input))
        {
            document.getElementById(input).style.backgroundColor = "green"
            return input
        }
        document.getElementById(input).style.backgroundColor = "red"
        return input
    }
})
