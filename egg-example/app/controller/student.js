/**
 * 2017-9-26 Jifeng Cheng
 * 调用service里的方法
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.student.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.student.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.student.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.student.update(this.ctx.request.body);
    }
  }
  return StartController;
};
