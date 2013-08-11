﻿var app = angular.module('betApp', []);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/bettable',
            {
                controller: 'BetTableController',
                templateUrl: '/app/partials/betTable.html'
            })
        .when('/betdescription/:betID',
            {
                controller: 'BetDescriptionController',
                templateUrl: '/app/partials/betDescription.html'
            })
        .otherwise({ redirectTo: '/bettable' });
});










