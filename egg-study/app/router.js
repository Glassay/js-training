'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/add', 'people.add');
  app.post('/delete', 'people.delete');
  app.post('/update', 'people.update');
  app.post('/select', 'people.select');
};
