/**
 * 2017-9-25 Jifeng Cheng
 * 调用service里的方法
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.test.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.test.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.test.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.test.update(this.ctx.request.body);
    }
  }
  return StartController;
};

