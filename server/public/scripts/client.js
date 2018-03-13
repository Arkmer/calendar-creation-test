const app = angular.module('calendarApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsController as sc'
  }).when('/year', {
    templateUrl: 'views/year.html',
    controller: 'YearController as yc'
  }).when('/month', {
    templateUrl: 'views/month.html',
    controller: 'MonthController as mc'
  }).when('/week', {
    templateUrl: 'views/week.html',
    controller: 'WeekController as wc'
  }).when('/day', {
    templateUrl: 'views/day.html',
    controller: 'DayController as dc'
  }).otherwise({redirectTo: '/'});
})