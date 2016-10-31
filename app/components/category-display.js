import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['postDate:desc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy')
});
