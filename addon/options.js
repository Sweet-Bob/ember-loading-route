/**
 * Plugin options checker
 */
class Options {

  constructor(ENV) {

    // Plugin options
    this.opts = ENV['ember-loading-route'];

    // Plugin is enabled?
    this.enabled = this.opts.enabled || false;

    // Array of route configs
    this.commonRoutes = this.opts.commonRoutes || false;

    /**
     * Condition must present in routeName
     * @type {String|boolean}
     * @example
     * Case 1:
     * routeName = 'admin.dashboard.index'
     * condition = 'admin'
     *
     * Condition is present in routeName, and the loading route will be work
     *
     * Case 2:
     * routeName = 'user.dashboard.index'
     * condition = 'admin'
     *
     * Condition isn't present in routeName, and the loading route will not work
     */

  }

  /**
   * @returns {Boolean}
   */
  isPluginEnabled() {
    return this.enabled;
  }

  /**
   * @return {Array|Boolean}
   */
  getConfigOfRoutes() {
    return this.commonRoutes;
  }

}

export default Options;
