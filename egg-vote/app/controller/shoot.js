/**
 * 2017-9-28 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * login() {
      this.ctx.body = yield this.service.shoot.login(this.ctx.request.body);
    }
    * check1() {
      this.ctx.body = yield this.service.shoot.check1(this.ctx.request.body);
    }
    * check2() {
      this.ctx.body = yield this.service.shoot.check2(this.ctx.request.body);
    }
    * vote() {
      this.ctx.body = yield this.service.shoot.vote(this.ctx.request.body);
    }
  }
  return StartController;
};
