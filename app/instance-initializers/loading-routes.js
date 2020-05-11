import Route from 'ember-route';
import ENV from '../config/environment';
import Options from 'ember-loading-route/options';

/**
 * @private
 */
export function initialize() {

  let [ app ] = arguments;

  let mainRouter = app.lookup('router:main');
  let options = new Options(ENV);

  if (options.isPluginEnabled()) {
    init.call(this);
  }

  function init() {

    mainRouter.one('willTransition', this, () => {

      // Loop over the loading routes
      options.getConfigOfRoutes().forEach((routeConfig) => {
        setLoadingRoutesFromConfig(routeConfig);
      });

    });

  }

  /**
   * @param {Object} routeConfig
   * @private
   */
  function setLoadingRoutesFromConfig(routeConfig) {

    let { templateName, routeLevel, condition } = routeConfig;

    let LoadingRoute = Route.extend({ templateName });

    let routeNames = Object.keys(mainRouter._routerMicrolib.recognizer.names);

    routeNames.forEach(function(routeName) {

      if (condition) {
        setRouteByCondition(routeName);
      } else {
        setRoute(routeName);
      }

    });


    function setRouteByCondition(routeName) {

      let isRouteLevel = _routeLevelCheck(routeName, routeLevel);

      if (isRouteLevel) {
        if (routeName.indexOf('loading') !== -1 && routeName.indexOf(condition) !== -1) {
          app.register(`route:${routeName}`, LoadingRoute);
        }
      }

    }

    function setRoute(routeName) {

      let isRouteLevel = _routeLevelCheck(routeName, routeLevel);

      if (isRouteLevel && routeName.indexOf('loading') !== -1) {
        app.register(`route:${routeName}`, LoadingRoute);
      }

    }

    /**
     * Route level check
     * @param {String} routeName
     * @param {Number} routeLevel
     * @returns {boolean}
     * @private
     */
    function _routeLevelCheck(routeName, routeLevel) {
      let segments = routeName.split('.');
      return routeLevel ? segments.length === routeLevel : true;
    }

  }

}

export default {
  name: 'loading-routes',
  initialize
};


