import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.run.later(this, () => {
        resolve();
      }, 2000);
    });
  }
});
