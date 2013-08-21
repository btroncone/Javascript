app.factory('betFactory', function ($resource) {

    return $resource('/api/bet/:id', { id: '@id' }, { update: { method: 'PUT' } });

      
});
