import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  category: 'gravesites',
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
        category: this.get('category'),
        location: this.get('location'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        description: this.get('description'),
        postDate: moment().valueOf()
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
