/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import Services from './services/services';
import Filters from './filters/filters';
import Controllers from './controllers/controllers';
import Components from './components/components.js';
import Directives from './directives/directives.js';
import Animation from './app.animation.js';
import Config from './app.confige.js';

angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'ngMaterial',
	'afklStickyElement',
	'dndLists',
	'n3-line-chart',
	Config.name,
	Animation.name,
	Controllers.name,
	Filters.name,
	Services.name,
	Components.name,
	Directives.name
]);