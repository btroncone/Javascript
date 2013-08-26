/// <reference path="jquery-1.8.2.js" />

    var betTracker = function () {
        var betUrl = '/api/Bet';

        init = function () {
            
            $('#addBet').click(function () {
                addBet();
            });
            var eventDate = $('#EventDate');
            var stakeholderOne = $('#StakeholderOne');
            var stakeholderTwo = $('#StakeholderTwo');
            var stakes = $('#Stakes');
            var eventName = $('#EventName');
            var description = $('#Description');
            getBets();
        };

         var getBets = function () {
             betService.getBets()
                    .done(function (bets) {
                        var betsHtml = "";
                        for (var i = 0; i < bets.length; i++) {
                            betsHtml += "<td>" + bets[i].StakeholderOne + "</td>" +
                            "<td>" + bets[i].StakeholderTwo + "</td>" +
                            "<td>" + bets[i].EventDate + "</td>" +
                            "<td>" + bets[i].EventName + "</td>" +
                            "<td>" + bets[i].Stakes + "</td>"
                        }
                        $('#mainBetTable').html(betsHtml);
                    })
                        .fail(function () {
                            alert('Unable to retrieve the bets!');
                        });
            },
            addBet = function () {          
                var bet = {
                    StakeholderOne: stakeholderOne.val(),
                    StakeholderTwo: stakeholderTwo.val(),
                    EventName: eventName.val(),
                    EventDate: eventDate.val(),
                    Description: description.val(),
                    Stakes: stakes.val()
                }
                betService.addBet(bet)
                    .done(function () {
                        getBets();
                    })
                .fail(function () {
                    alert('Unable to add bet!');
                });
            }

        return {
            init: init,
        };

    }();


    


