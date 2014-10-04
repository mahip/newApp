'use strict';

angular.module('newAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'app/main/about.html'
      })
       .state('main.showBooks',{
         url: 'home/showBooks',
         templateUrl: 'app/content/books.html'
      })


  });