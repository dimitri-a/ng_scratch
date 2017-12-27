describe('myController testing',function(){

    beforeEach(module('ngboiler'));
    
    describe('simple test',function(){
        it('should be defined',function(){
            expect(1).toEqual(1);
        });

        it('should be defined',inject(function($controller,$rootScope){
            $scope = $rootScope.$new();
            var ctrl = $controller('myController',{$scope:$scope});
           // console.log(ctrl);
            expect(ctrl).toBeDefined();

        }));

        it('should be return scope.myHtml = hi there',inject(function($controller,$rootScope){
            $scope = $rootScope.$new();
            var ctrl = $controller('myController',{$scope:$scope});
            //console.log(ctrl);
            expect($scope.myHTML).toEqual('hi there');
        }));

        it('should be return scope.changeGreeting = good bye',inject(function($controller,$rootScope){
            $scope = $rootScope.$new();
            var ctrl = $controller('myController',{$scope:$scope});
            $scope.changeHello();
            expect($scope.myHTML).toEqual('good bye');
        }));


    });

})