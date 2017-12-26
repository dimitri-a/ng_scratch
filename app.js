(function(angular) {
    'use strict';
    angular.module('bindHtmlExample', ['ngSanitize'])
        .controller('ExampleController', ['$scope', function($scope) {
            $scope.myHTML =
                'I am an <code>HTML</code>string with ' +
                '<a href="#">links!</a> and other <em>stuff</em>';
        }]);
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/