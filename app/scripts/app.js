'use strict';

/**
 * @ngdoc overview
 * @name promoPlatformApp
 * @description
 * # promoPlatformApp
 *
 * Main module of the application.
 */
angular
  .module('promoPlatformApp', [
    'ui.bootstrap',
    'angularModalService',
    'ui.router',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      
        $stateProvider
          .state('common', {
            templateUrl: 'common.html', /*This is the 1st (home) layout*/
            abstract: true
          })
          .state('home', {
            url: '/home',
            templateUrl: '/views/main.html',
            parent: 'common',
            controller: 'MainCtrl'
          })
          .state('admin-login', {
            url: '/admin-login',
            templateUrl: 'views/admin-login.html',
            parent: 'common',    
            controller: 'AdminLoginCtrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            parent: 'common',
            controller: 'LoginCtrl'
          })
          .state('sign-up', {
            url: '/sign-up',
            templateUrl: 'views/sign-up.html',
            parent: 'common',
            controller: 'SignUpCtrl'
          })
          .state('vendedor-home', {
            url: '/vendedor',
            templateUrl: 'views/vendedor-home.html',
            controller: 'VendedorHomeCtrl'
         })
        .state('add-product', {
          url: '/agregar-producto',
          templateUrl: 'views/add-product.html',
          parent: 'vendedor-home',
          controller: 'AddProductCtrl'
        })
        .state('subscription', {
          url: '/suscripcion',
          templateUrl: 'views/subscription.html',
          parent: 'vendedor-home',
          controller: 'SubscriptionCtrl'
        })
        .state('create-shop', {
          url: '/agregar-tienda',
          templateUrl: 'views/create-shop.html',
          parent: 'vendedor-home',
          controller: 'CreateShopCtrl'
        })
        .state('settings', {
          url: '/ajustes',
          templateUrl: 'views/settings.html',
          parent: 'vendedor-home',
          controller: 'SettingsCtrl'
        })
        .state('create-company', {
          url: '/crear-empresa',
          templateUrl: 'views/create-company.html',
          parent: 'vendedor-home',
          controller: 'CreateCompanyCtrl'
        })
        .state('list-of-shops', {
          url: '/lista-de-tiendas',    
          templateUrl: 'views/list-of-shops.html',
          parent: 'vendedor-home',
          controller: 'ListOfShopsCtrl'
        })
        .state('list-of-products', {
          url: '/lista-de-productos', 
          templateUrl: 'views/list-of-products.html',
          parent: 'vendedor-home',
          controller: 'ListOfProductsCtrl'
        })
        .state('edit-product', {
          url: '/editar-producto',    
          templateUrl: 'views/edit-product.html',
          parent: 'vendedor-home',
          controller: 'EditProductCtrl'
        })
        .state('requests', {
          url: '/peticiones-quejas-y-reclamos',
          templateUrl: 'views/requests.html',
          parent: 'vendedor-home',
          controller: 'RequestsCtrl'
        })    
        .state('admin-home', {
          url: '/admin',
          templateUrl: 'views/admin-home.html',
          controller: 'AdminHomeCtrl'
        })
        .state('admin-main', {
          url:'/pagina-de-inicio',
          templateUrl: 'views/admin-main.html',
          parent: 'admin-home',
          controller: 'AdminMainCtrl'
        })
        .state('admin-request', {
            url:'/peticiones',
          templateUrl: 'views/admin-request.html',
          parent: 'admin-home',
          controller: 'AdminRequestCtrl'
        })
        .state('admin-complaint', {
          url:'/quejas',
          templateUrl: 'views/admin-complaint.html',
          parent: 'admin-home',
          controller: 'AdminComplaintCtrl'
        })
        .state('admin-claim', {
          url:'/reclamos',
          templateUrl: 'views/admin-claim.html',
          parent: 'admin-home',
          controller: 'AdminClaimCtrl'
        })
        $urlRouterProvider.otherwise('/home');
}]);



