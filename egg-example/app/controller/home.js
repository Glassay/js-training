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
      this.ctx.body = yield this.service.hom.text2();
    }
    * index6() {
      this.ctx.body = yield this.service.hom.text3();
    }
    * index7() {
      this.ctx.body = yield this.service.hom.text4();
    }
    * index8() {
      this.ctx.body = yield this.service.hom.text5();
    }
    * index9() {
      // const a = yield this.service.hom.text6();
      // this.ctx.body = yield this.service.hom.text6(3, 4);
      this.ctx.body = this.ctx.helper.foo('a');
    }
    * index10() {
      this.ctx.body = this.ctx.helper.text1();
    }
    * index11() {
      this.ctx.body = this.ctx.helper.text2(this.ctx.request.query.a, this.ctx.request.query.b);
    }
  }
  return HomeController;
};
