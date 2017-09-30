/**
 * 2017-9-28 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class Teacher extends app.Service {
    * add1(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * add2(a) {
      try {
        yield app.mysql.insert('works', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select1(a) {
      let res;
      try {
        yield app.mysql.get('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * select2(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Teacher;
};
