/**
 * 2017-9-26 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.worker.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.worker.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.worker.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.worker.update(this.ctx.request.body);
    }
  }
  return StartController;
};
