import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  postDate: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  contact: DS.attr(),
  category: DS.attr(),
  location: DS.attr(),
  price: DS.attr()
});
