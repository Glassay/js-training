/**
 * 2017-9-27 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.teacher.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.teacher.delete(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.teacher.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.teacher.select(this.ctx.request.body);
    }
  }
  return StartController;
};
