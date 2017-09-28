'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/add', 'people.add');
  app.post('/delete', 'people.delete');
  app.post('/update', 'people.update');
  app.post('/select', 'people.select');
  app.post('/login', 'shoot.add');
  app.post('/update1', 'shoot.update');
  app.post('/chexkw', 'shoot.select1');
  app.post('/checkv', 'shoot.select2');
};
