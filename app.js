
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    console.log("My controller.....");
    $scope.products = [
        {name: "Product One", price: "10000", id:"1"},
        {name: "Product Two", price: "20000", id:"2"},
        {name: "Product Tree", price: "30000", id:"3"},
        {name: "Product Four", price: "40000", id:"4"},
        {name: "Product Five", price: "50000", id:"5"},

    ];

    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.message = "New User Added successfully";
    };

    $scope.selectProd = function(prod){
        $scope.clickedProd = prod;
    };

    $scope.editProduct = function(){
        $scope.message = "User Edited successfully";
    };

    $scope.deleteProd = function(){
        $scope.products.splice($scope.products.indexOf($scope.clickedUser));
        $scope.message = "User Deleted successfully";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };

});

