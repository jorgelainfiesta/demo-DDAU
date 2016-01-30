import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mostrar-carro', 'Integration | Component | mostrar carro', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mostrar-carro}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mostrar-carro}}
      template block text
    {{/mostrar-carro}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
