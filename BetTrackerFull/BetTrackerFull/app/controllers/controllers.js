app.controller('BetTableController', function ($scope, $location, betFactory) {    

    $scope.bets = betFactory.query();

    $scope.addBet = function () {
        var newBet ={
            StakeholderOne: $scope.newBet.firstStakeholder,
            StakeholderTwo: $scope.newBet.secondStakeholder,
            EventName: $scope.newBet.eventName,
            EventDate: $scope.newBet.eventDate,
            Description: $scope.newBet.betDescription,
            Stakes: $scope.newBet.stakes
    }     
        betFactory.save(newBet);
        $scope.bets.push(newBet);

        $scope.newBet.firstStakeholder = '';
        $scope.newBet.secondStakeholder = '';
        $scope.newBet.eventName = '';
        $scope.newBet.eventDate = '';
        $scope.newBet.betDescription = '';
        $scope.newBet.stakes = '';
    };
    $scope.removeBet = function (index) {        
        var betToDelete = $scope.bets[index];
        betFactory.delete({ id: betToDelete.Id }, function (success) {
            $scope.bets.splice(index, 1);
        });
    };   
});

app.controller('BetDescriptionController', function ($scope, $routeParams, betFactory) {
    $scope.bet = betFactory.get({ id: $routeParams.Id });    
});

app.controller('EditBetController', function ($scope, $routeParams, betFactory) {
    $scope.bet = betFactory.get({ id: $routeParams.Id });

    $scope.editBet = function () {
        betFactory.update({id: $scope.bet.Id}, $scope.bet)
        };
    });


    
