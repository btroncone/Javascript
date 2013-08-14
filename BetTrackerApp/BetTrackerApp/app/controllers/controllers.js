/// <reference path="../../Scripts/angular.js" />

app.controller('BetTableController', function ($scope, betFactory) {
    $scope.bets = [];
    init();
    function init() {
        $scope.bets = betFactory.getBets();
    }

    $scope.addBet = function () {
        var name = $scope.newBet.firstStakeholder;
        var nameTwo = $scope.newBet.secondStakeholder;
        var eventName = $scope.newBet.eventName;
        var eventDate = $scope.newBet.eventDate;
        var description = $scope.newBet.betDescription;
        var stakes = $scope.newBet.stakes;

        betFactory.addBet(name, nameTwo, eventName, eventDate, stakes, description);
        
            $scope.newBet.firstStakeholder = '';
            $scope.newBet.secondStakeholder = '';
            $scope.newBet.eventName = '';
            $scope.newBet.eventDate = '';
            $scope.newBet.betDescription = '';
            $scope.newBet.stakes = '';
    };

    $scope.removeBet = function($index) {

        betFactory.removeBet($index);

    };
});

app.controller('BetDescriptionController', function ($scope, $routeParams, betFactory) {

    init();
    function init() {
        var betID = ($routeParams.betID) ? parseInt($routeParams.betID) : 0;
        if (betID > 0) {
            $scope.bet = betFactory.getBet(betID);
        }
    }
});

app.controller('EditBetController', function ($scope, $routeParams, betFactory) {

    init();
    function init() {
        var betID = ($routeParams.betID) ? parseInt($routeParams.betID) : 0;
        if (betID > 0) {
            $scope.bet = betFactory.getBet(betID);
        }
    }
    $scope.editBet = function ($index, bet) {

        betFactory.editBet($index, bet);
        

    };
});



