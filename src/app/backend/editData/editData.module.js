/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.editData', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('edit-data', {
                url: '/edit-data',
                templateUrl: 'app/backend/editData/editData.html',
                title: 'Edit data',
                sidebarMeta: {
                    icon: 'fa fa-pencil-square-o',
                    order: 9
                }
            });
    }

})();
