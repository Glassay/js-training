'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.index2');
  app.get('/sohu', 'home.index3');
  app.get('/lala', 'home.index4');
};
