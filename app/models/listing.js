import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  postDate: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  contact: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  location: DS.attr(),
  price: DS.attr()
});
