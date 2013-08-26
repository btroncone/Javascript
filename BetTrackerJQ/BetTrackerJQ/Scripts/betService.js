/// <reference path="jquery-1.8.2.js" />
    var betService = function () {

        var serviceUrl = '/api/Bet';

        getBets = function () {
            return $.getJSON(serviceUrl);
        },

        addBet = function (bet) {

            return $.ajax({
                type: 'POST',
                url: serviceUrl,
                data: bet
            });
        };
        return {
            addBet: addBet,
            getBets: getBets
        };
    }();
