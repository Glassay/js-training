/** 
 * 2017-9-29 Jifeng Cheng
 */
'use strict';

module.exports = app => {
  app.post('/user/registration', 'user.registration');
  app.post('/user/login', 'user.login');
  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/modify', 'mobile.modify');
  app.post('/works/list1', 'user.list1');
  app.post('/works/list2', 'works.list2');
  app.post('/works/vote', 'works.vote');
  app.post('/works/upload', 'works.upload');
};

