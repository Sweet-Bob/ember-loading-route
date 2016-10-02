import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('first-level');
  this.route('user-l2', function() {
    this.route('settings-l3', function() {
      this.route('social-integration');
    });

    this.route('dashboard-l3', function() {
      this.route('about');
    });
  });

  this.route('loading-routes', function() {
    this.route('first-level');
    this.route('second-level');
    this.route('third-level');
  });
  this.route('admin-l2', function() {});
});

export default Router;
