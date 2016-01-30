import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/api/carros', function() {
    return {
      data: [{
        id: 1,
        type: 'carro',
        attributes: {
          color: 'rojo'
        }
      },
      {
        id: 2,
        type: 'carro',
        attributes: {
          color: 'azul'
        }
      },
      {
        id: 3,
        type: 'carro',
        attributes: {
          color: 'gris'
        }
      }]
    };
  });
  this.patch('/api/carros/:id', function(db, request) {
    return JSON.parse(request.requestBody);
  });
  this.del('/api/carros/:id', function(db, request) {
    return new Mirage.Response(204);
  });
}
