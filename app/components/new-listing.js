import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  category: 0,
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    updateValue(value) {
       this.set('category', value);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        location: this.get('location'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        description: this.get('description'),
        postDate: moment().valueOf()
      };
      var newCategory = this.get('category');
      this.set('addNewListing', false);
      this.sendAction('saveListing', params, newCategory);
    }
  }
});
