import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const carros = this.store.findAll('carro');
    return carros;
  },
  afterModel(carros) {
    console.log(carros.get('length'));
  }
});
