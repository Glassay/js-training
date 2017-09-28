/**
 * 2017-9-28 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class Teacher extends app.Service {
    * add(a) {
      try {
        yield app.mysql.insert('参与者', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('参与者', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select1(a) {
      let res;
      try {
        yield app.mysql.get('参与者', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * select2(req) {
      let res;
      try {
        res = yield app.mysql.get('参与者', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Teacher;
};
