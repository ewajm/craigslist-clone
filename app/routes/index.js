import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var contact = newListing.get('id') + "@ghoulslist.org";
      newListing.set('contact', contact.toString());
      newListing.save();
      this.transitionTo('index');
    }
  }
});
