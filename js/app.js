;(function(window, angular) {

  'use strict';

  // Application module
	angular.module('app', [
		'ui.router'
	])

	// Application config
	.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('root', {
        views: {
          '': {
            templateUrl: './html/root.html'
          },
          'header@root': {
            templateUrl: './html/header.html'
          },
          'footer@root': {
            templateUrl: './html/footer.html'
          }
        }
      })
      .state('home', {
				url: '/',
        parent: 'root',
				templateUrl: './html/home.html',
        controller: 'homeController'
			})
      .state('page1', {
				url: '/page1',
        parent: 'root',
				templateUrl: './html/page1.html',
        controller: 'page1Controller'
			})
      .state('page2', {
				url: '/page2',
        parent: 'root',
				templateUrl: './html/page2.html',
        controller: 'page2Controller'
			});
      
      $urlRouterProvider.otherwise('/');
    }
  ])

	// Application run
  .run([
    '$rootScope',
    function($rootScope) {
      $rootScope.commonTitle = "Üdvözöljük!";
      console.log('Run...');
    }
  ])

  // Home controller
  .controller('homeController', [
    '$scope',
    function($scope) {
      $scope.title = "Home";
      console.log('Home controller...');
    }
  ])

  // Page1 controller
  .controller('page1Controller', [
    '$scope',
    function($scope) {
      $scope.title = "Page 1";
      console.log('Page1 controller...');
    }
  ])

  // Page2 controller
  .controller('page2Controller', [
    '$scope',
    function($scope) {
      $scope.title = "Page 2";
      console.log('Page2 controller...');
    }
  ]);
	
})(window, angular);