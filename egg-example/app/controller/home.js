'use strict';
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * index1() {
      this.ctx.body = 'hi,';
    }
    * index2() {
      this.ctx.body = yield this.service.home.sina();
    }
    * index3() {
      this.ctx.body = yield this.service.home.sohu();
    }
    * index4() {
      const r = yield this.service.hom.text1();
      const d = yield this.service.home.text1();
      this.ctx.body = r + ' ' + d;
    }
    * index5() {
      this.ctx.body = yield this.service.home.text2();
    }
  }
  return HomeController;
};
