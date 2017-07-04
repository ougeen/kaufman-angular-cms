/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.editStructure', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('edit-structure', {
                url: '/edit-structure',
                templateUrl: 'app/backend/editStructure/editStructure.html',
                title: 'Edit structure',
                sidebarMeta: {
                    icon: 'fa fa-pencil-square',
                    order: 8
                }
            });
    }

})();
