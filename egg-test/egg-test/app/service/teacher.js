/**
 * 2017-9-27 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class Teacher extends app.Service {
    * add(a) {
      try {
        yield app.mysql.insert('teacher', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('teacher', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('teacher', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select(req) {
      let res;
      try {
        res = yield app.mysql.get('teacher', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Teacher;
};
