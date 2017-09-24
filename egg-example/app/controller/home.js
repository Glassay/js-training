'use strict';
const _ = require('lodash');

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
      const i = yield this.service.home.text2();
      const j = yield this.service.hom.text2();
      this.ctx.body = _.difference(i, j);
    }

  }
  return HomeController;
};
