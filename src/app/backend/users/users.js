/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.users', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'app/backend/users/users.html',
                title: 'Users',
                sidebarMeta: {
                    icon: 'ion-person-stalker',
                    order: 4
                }
            });
    }

})();
