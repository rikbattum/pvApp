//describe("Directive", function () {
//
//    var $scope, scope;
//
//
//    beforeEach(module('PVapp'));
//
//
//    beforeEach(inject(function ($rootScope, $compile) {
//        $scope = $rootScope.$new();
//        var element = angular.element("<test></test>");
//        template = $compile(element)($scope);
//        scope.$apply()
//        scope = element.isolateScope;
//        console.log (scope);
//        ;
//        $scope.$digest();
//        controller = element.controller;
//    }));
//
//    it("should toogle open when toggle() is called", inject(function () {
//        scope.toggle();
//        $scope.open = false;
//        $scope.toggle();
//        expect($scope.open).toBeTruthy();
//        $scope.toggle();
//        expect($scope.open).toBeFalsy();
//    }));
//});
