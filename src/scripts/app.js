/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import Services from './services/services';
import Filters from './filters/filters';
import Controllers from './controllers/controllers';
import Components from './components/components.js';

angular.module('myApp', [
	'ngRoute',
	Controllers.name,
	Filters.name,
	Services.name,
	Components.name
])
	.config(function($routeProvider, $locationProvider) {
		//$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/phones', {
				template: '<phone-list query="ctrl.query"></phone-list>'
			})
			.when('/phones/:phoneID', {
				template: '<div><h1>Phone Details</h1></h1><p>{{phone.name}}</p></div>'
			});

		//$locationProvider.html5Mode(true);
		}
	);