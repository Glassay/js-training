/**
 * 2017-10-7 Jifeng Cheng
 */

'use strict';
module.exports = app => {
  class Table1Controller extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.table1.add(this.ctx.request.body);
    }
  }
  return Table1Controller;
};
