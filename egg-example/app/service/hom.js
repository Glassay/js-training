'use strict';
module.exports = app => {
  class Hom extends app.Service {
    * text1() {
      return 'hello';
    }
  }
  return Hom;
};
