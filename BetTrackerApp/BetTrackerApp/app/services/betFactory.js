app.factory('betFactory', function () {
    var bets = [{
        id: 1,
        name: 'Brian Troncone',
        nameTwo: 'Miko Hukki',
        eventName: 'Ravens v Patriots',
        eventDate: 'Aug 6, 2013',
        stakes: '5.00',
        description: 'AFC Championship-Miko picks Pats',
        complete: false
    }, {
        id: 2,
        name: 'Stephen Troncone',
        nameTwo: 'Miko Hukki',
        eventName: 'Browns v Bears',
        eventDate: 'Jun 14, 2013',
        stakes: '10.00',
        description: 'SuperBown -10',
        complete: false
    },
    {
        id: 3,
        name: 'Ms. Boots',
        nameTwo: 'Riko',
        eventName: 'Battle for Food Bowl',
        eventDate: 'Dec 6, 2011',
        stakes: '15.00',
        description: 'Dogfood for everyone',
        complete: false
    }];
    factory = {};
    factory.getBets = function () { return bets; };
    factory.addBet = function(name, nameTwo, eventName, eventDate, stakes, description) {

        bets.push({            
            id: bets.length + 1,
            name: name,
            nameTwo: nameTwo,
            eventName: eventName,
            eventDate: eventDate,
            stakes: stakes,
            description: description,
            complete: false
            
        });


    };
    factory.getBet = function(id) {
        for (var i = 0; i < bets.length; i++) {
            if (bets[i].id === id) {
                return bets[i];
            }
        }
        return null;
    };

    factory.removeBet = function($index) {
        bets.splice($index, 1);
    };
    
    factory.editBet = function($index, bet) {
        bets[$index] = bet;
    };
    
    return factory;
});
