(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .directive('btnToggle', btnToggle);

    /** @ngInject */
    function btnToggle() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    $('['+ attrs.btnToggle +']').toggleClass('toggle');
                });
            }
        };
    }

})();