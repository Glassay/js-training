'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/add', 'teacher.add');
  app.post('/delete', 'teacher.delete');
  app.post('/update', 'teacher.update');
  app.post('/select', 'teacher.select');
};

