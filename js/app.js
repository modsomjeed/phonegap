//angular.module('myApp', ["mobile-angular-ui"]);
var app = angular.module('grader', [
  "ngRoute",
  "mobile-angular-ui",
  "mobile-angular-ui.touch",
  "mobile-angular-ui.scrollable"
])

app.config(function($routeProvider) {
      $routeProvider.when('/', {
         templateUrl: 'pages/home.html',
         controller: 'HomeCtrl'
      }).when('/cal', { 
         templateUrl: 'pages/calculater.html',
         controller: 'CalculaterCtrl'
      }).when('/loadpic', { 
         templateUrl: 'pages/loadpic.html',
         controller: 'LoadpicCtrl'
      }).when('/question', { 
         templateUrl: 'pages/question.html',
         controller: 'QuestionCtrl'
      });
      // ...
  });

