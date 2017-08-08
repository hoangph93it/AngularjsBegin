/// <reference path="../angular.min.js" />
var app = angular.module("ajaxcallModule", []);
app.controller('ajaxcallControler', function ($scope, $http) {
    debugger;
    var get_url_data = "listEmployee.txt";
    $http.get(get_url_data).then(function (respone) {
        debugger;
        $scope.listEmployee = respone;
    });
})