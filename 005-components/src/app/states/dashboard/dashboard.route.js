(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerDashboard);

    /** @ngInject */
    function routerDashboard($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                views:{
                    "site@":{
                        template: '<section class="dashboard" ui-view="main"></section>'
                    },
                    "navbar@":{
                        component: 'navbarComponent'
                    }
                },
                onEnter: function(Auth, $state){
                    if(!Auth.currentUser()){
                        $state.go('login');
                    }
                }
            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                views:{
                    "main":{
                        component: 'dasDetailComponent'
                    }
                }
            })
            .state('mainDashboard', {
                parent: 'dashboard',
                url: '/main-dashboard',
                params: {
                    currentUser: {}
                },
                views:{
                    "main":{
                        component: 'dashboardComponent'
                    }
                }
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                views:{
                    "main@":{
                        component: 'dasConfigComponent'
                    }
                }
            });
    }

})();
