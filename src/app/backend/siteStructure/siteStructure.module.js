/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.siteStructure', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('site-structure', {
                url: '/site-structure',
                templateUrl: 'app/backend/siteStructure/siteStructure.html',
                title: 'Site structure',
                sidebarMeta: {
                    icon: 'ion-network',
                    order: 0
                }
            });
    }

})();
