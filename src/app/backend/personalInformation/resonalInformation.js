/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.backend.personalInformation', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('personal-information', {
                url: '/personal-information',
                templateUrl: 'app/backend/personalInformation/personalInformation.html',
                title: 'Personal info',
                sidebarMeta: {
                    icon: 'ion-person',
                    order: 3
                }
            });
    }

})();
