/**
 * 2017-10-7 Jifeng Cheng
 */

'use strict';
module.exports = app => {
  class Table1 extends app.Service {
    * add(param) {
      try {
        yield app.mysql.insert('table1', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Table1;
};
