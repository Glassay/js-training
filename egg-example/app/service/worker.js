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
  }
  return Worker;
};
