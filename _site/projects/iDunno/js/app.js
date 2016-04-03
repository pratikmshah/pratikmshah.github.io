var dunno = angular.module('dunno', [
  'ngRoute',                      // use angular routes
  'mainControllers',              // run main controller
  'youtube-embed'                 // add youtube embedded videos
]);

dunno.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'                  // main controller conatains all data (bootstrap, git, rails4 etc..)
  }).
  when('/angjs/:itemId', {
    templateUrl: 'partials/angjs/show.html',
    controller: 'AngularController'               // angular js controller
  }).
  when('/boot3/:itemId', {
    templateUrl: 'partials/bootstrap3/show.html',
    controller: 'Boot3Controller'                 // bootstrap 3 controller
  }).
  when('/cli/:itemId', {
    templateUrl: 'partials/cli/show.html',
    controller: 'CommandLineController'           // command line controller
  }).
  when('/css/:itemId', {
    templateUrl: 'partials/bootstrap3/show.html',
    controller: 'CssController'                   // CSS controller
  }).
  when('/git/:itemId', {
    templateUrl: 'partials/git/show.html',
    controller: 'GitController'                   // git controller
  }).
  when('/html/:itemId', {
    templateUrl: 'partials/html/show.html',
    controller: 'HtmlController'                  // HTML controller
  }).
  when('/js/:itemId', {
    templateUrl: 'partials/html/show.html',
    controller: 'JavascriptController'            // javascript controller
  }).
  when('/jquery/:itemId', {
    templateUrl: 'partials/jquery/show.html',
    controller: 'JqueryController'                // jquery controller
  }).
  otherwise({
    redirectTo: '/main'                           // redirect to main page
  });
}]);