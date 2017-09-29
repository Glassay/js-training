/**
 * 2017-9-29 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class Mobile extends app.Service {
    * set(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error();
        return false;
      }
      return true;
    }
    * modify(a) {
      try {
        yield app.mysql.update('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Mobile;
};
