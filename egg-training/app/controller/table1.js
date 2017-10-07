/**
 * 2017-10-7 Jifeng Cheng
 */

'use strict';
module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.test.add(this.ctx.request.body);
    }
  }
  return StartController;
};
