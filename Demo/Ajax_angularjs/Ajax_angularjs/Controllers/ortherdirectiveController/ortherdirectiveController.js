/// <reference path="../angular.min.js" />
var app = angular.module("ortherdirectiveModule", []);
app.controller('ortherdirectiveController', function ($scope, $http) {
    $scope.message = {
        title: 'Máy tính',
        number_one: 'Số thứ nhất',
        number_two: 'Số thứ hai',
        phep_cong: 'Phép cộng',
        phep_tru: 'Phép trừ',
        phep_nhan: 'Phép nhân',
        phep_chia: 'Phép chia'
    };
    $scope.style_display = 'display_none';
    $scope.show_result = function () {
        if ($scope.myForm.$valid) {
            $scope.style_display = 'display_block';
            $scope.result = {
                phep_cong: parseInt($scope.number_one) + parseInt($scope.number_two),
                phep_tru: parseInt($scope.number_one) - parseInt($scope.number_two),
                phep_nhan: parseInt($scope.number_one) * parseInt($scope.number_two),
                phep_chia: parseInt($scope.number_one) / parseInt($scope.number_two)
            }
        } else {
            $scope.style_display = 'display_none';
        }
    }
})