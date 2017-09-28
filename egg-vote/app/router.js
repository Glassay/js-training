'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/login', 'shoot.login');
  app.post('/checkvote', 'shoot.check1');
  app.post('/checkworks', 'shoot.check2');
  app.post('/vote', 'shoot.vote');
};
