/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.dataBases', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('data-bases', {
                url: '/data-bases',
                templateUrl: 'app/backend/dataBases/dataBases.html',
                title: 'Data bases',
                sidebarMeta: {
                    icon: 'ion-android-cloud',
                    order: 2
                }
            });
    }

})();
