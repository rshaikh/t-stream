describe('PhoneListCtrl', function(){
    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller){
        var scope = {};
        ctrl = $controller('phoneListCtrl', {$scope:scope});

        assert(scope.phones.length == 3, "there must be 3 phones");
    }));
})