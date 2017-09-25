'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.index2');
  app.get('/sohu', 'home.index3');
  app.get('/lala', 'home.index4');
  app.get('/pag1', 'home.index5');
  app.get('/pag2', 'home.index6');
  app.get('/pag3', 'home.index7');
  app.get('/pag4', 'home.index8');
  app.post('/pag4', 'home.index8');
  app.get('/pag5', 'home.index9');
  app.get('/pag6', 'home.index10');
  app.get('/pag7', 'home.index11');
  app.post('/time', 'home.index12');
  app.get('/pag8', 'home.index13');
  app.get('/include', 'home.include');
  app.get('/include1', 'home.include1');
  app.get('/invokeMap', 'home.invokeMap');
  app.get('/map', 'home.map');
  app.post('/update', 'test.update');
  app.post('/delete', 'test.delete');
  app.get('/get', 'test.get');
  app.post('/create', 'test.create');
};
