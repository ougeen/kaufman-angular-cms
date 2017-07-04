/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend')
        .controller('editPageCtrl', editPageCtrl);

    /** @ngInject */
    function editPageCtrl($scope) {

        $scope.pageName = 'Home Page with Video';

        var vm = this;

        vm.standardSelectItems = [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 }
        ];

    }
})();