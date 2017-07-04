/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.accessRights', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('access-rights', {
                url: '/access-rights',
                templateUrl: 'app/backend/accessRights/accessRights.html',
                title: 'Access rights',
                sidebarMeta: {
                    icon: 'ion-android-hand',
                    order: 5
                }
            });
    }

})();
