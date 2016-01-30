import Ember from 'ember';

const {
  run: {debounce}
} = Ember;

export default Ember.Controller.extend({
  actions: {
    editarCarro(carro, colornuevo) {
      carro.set('color', colornuevo);
      debounce(carro, carro.save, 300);
    },
    borrarCarro(carro) {
      carro.destroyRecord();
    }
  }
});
