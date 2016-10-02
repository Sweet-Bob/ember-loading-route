/*jshint node:true*/
'use strict';

module.exports = function(environment) {

  var ENV = {
    modulePrefix: 'woodform',
    environment: environment,
    rootURL: '/',
    EmberENV: {
      FEATURES: { },
      EXTEND_PROTOTYPES: true,
      ENABLE_DS_FILTER: true
    }
  };

  ENV['ember-loading-route'] = {
    enabled: true,
    commonRoutes: [
      {
        routeLevel: 1,
        templateName: 'loading-routes/first-level'
      },
      {
        routeLevel: 2,
        templateName: 'loading-routes/second-level'
      },
      {
        routeLevel: 3,
        templateName: 'loading-routes/third-level'
      }
    ]
  };

  return ENV;

};
