/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.allBases', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('all-bases', {
                url: '/all-bases',
                templateUrl: 'app/backend/allBases/allBases.html',
                title: 'All bases',
                sidebarMeta: {
                    icon: 'ion-social-buffer',
                    order: 1
                }
            });
    }

})();
