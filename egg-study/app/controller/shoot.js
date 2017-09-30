/**
 * 2017-9-28 Jifeng Cheng
 */
'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add1() {
      this.ctx.body = yield this.service.shoot.add1(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.shoot.update(this.ctx.request.body);
    }
    * select1() {
      this.ctx.body = yield this.service.shoot.select1(this.ctx.request.body);
    }
    * select2() {
      this.ctx.body = yield this.service.shoot.select2(this.ctx.request.body);
    }
    * add2() {
      this.ctx.body = yield this.service.shoot.add2(this.ctx.request.body);
    }
  }
  return StartController;
};
