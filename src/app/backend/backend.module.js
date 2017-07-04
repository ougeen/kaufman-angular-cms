/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    var baseMod = 'BlurAdmin.backend';

    angular.module(baseMod, [
        baseMod + '.siteStructure',
        baseMod + '.allBases',
        baseMod + '.dataBases',
        baseMod + '.personalInformation',
        baseMod + '.users',
        baseMod + '.accessRights',
        baseMod + '.editStructure',
        baseMod + '.editData'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/site-structure');
    }

})();
