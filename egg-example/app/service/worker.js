/**
 * 2017-9-26 Jifeng Cheng
 */

'use strict';
module.exports = app => {
  class Worker extends app.Service {
    * add(param) {
      try {
        yield app.mysql.insert('worker', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * select() {
      let res;
      try {
        res = yield app.mysql.select('worker');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete(param) {
      try {
        yield app.mysql.delete('worker', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('worker', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update1s() {
      const a = yield app.mysql.beginTransaction();
      try {
        yield a.update('student', { id: 1, age: 'asd' });
        yield a.update('worker', { id: 1, age: 21 });
        yield a.commit();
      } catch (e) {
        yield a.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Worker;
};
