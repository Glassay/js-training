/**
 * 2017-9-28 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class Teacher extends app.Service {
    * login(a) {
      try {
        yield app.mysql.insert('用户', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * vate(a) {
      try {
        yield app.mysql.update('作品', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * check1(req) {
      let res;
      try {
        res = yield app.mysql.get('作品', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * check2(req) {
      let res;
      try {
        res = yield app.mysql.get('作品', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Teacher;
};
