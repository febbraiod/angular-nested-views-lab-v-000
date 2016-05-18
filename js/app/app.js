angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: 'views/home.html',
          controller: 'TwitterController'
        })
        .state('home.notifications', {
          url: 'notifications',
          templateUrl: 'views/home/notifications.html',
          contoller: 'NotificationsController'
        })   
        .state('home.timeline', {
          url: 'timeline',
          templateUrl: 'views/home/timeline.html',
          contoller: 'TimelineController'
        }) 
        .state('home.user', {
          url: 'user',
          templateUrl: 'views/home/user.html',
          contoller: 'ProfileController'
        });
    });