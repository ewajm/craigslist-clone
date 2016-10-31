import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    delete(listing) {
      if (confirm('Delete this listing?')) {
        listing.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
