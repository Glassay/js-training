'use strict';
module.exports = app => {
  class Hom extends app.Service {
    * text1() {
      return 'hello';
    }
    * text2() {
      const arr1 = [ 1, 2.1, 2.2, 3.2, 3.22, 4.3, 2.11 ];
      return arr1;
    }
  }
  return Hom;
};

