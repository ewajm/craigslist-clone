import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('category');
  },
  actions: {
    saveListing(params, newCategory) {
      var newListing = this.store.createRecord('listing', params);
      var category = this.store.findRecord('category', newCategory).then(function(category){
        newListing.set('category', category);
        var contact = newListing.get('id') + "@ghoulslist.org";
        newListing.set('contact', contact.toString());
        category.get('listings').addObject(newListing);
        newListing.save().then(function(){
          return category.save();
        });
      });
      this.transitionTo('index');
    }
  }
});
