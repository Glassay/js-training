/**
 * 2017-9-27 Jifeng Cheng
 */

'use strict';

module.exports = app => {
  class StartController extends app.Controller {
    * add() {
      this.ctx.body = yield this.service.people.add(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.people.delete(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.people.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.people.select(this.ctx.request.body);
    }
  }
  return StartController;
};
