var app = angular.module('betApp', ["ngResource"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/bettable',
            {
                controller: 'BetTableController',
                templateUrl: '/app/partials/betTable.html'
            })
        .when('/betdescription/:Id',
            {
                controller: 'BetDescriptionController',
                templateUrl: '/app/partials/betDescription.html'
            })
        .when('/editbet/:Id',
            {
                controller: 'EditBetController',
                templateUrl: '/app/partials/betEditForm.html'
            })
        .otherwise({ redirectTo: '/bettable' });
});

