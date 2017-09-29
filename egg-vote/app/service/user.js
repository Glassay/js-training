/**
 * 2017-9-29 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class User extends app.Service {
    * registration(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error();
        return false;
      }
      return true;
    }
    * login(a) {
      let res;
      try {
        res = yield app.mysql.get('people', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return User;
};
