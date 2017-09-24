'use strict';
const _ = require('lodash');
module.exports = app => {
  class Hom extends app.Service {
    * text1() {
      return 'hello';
    }
    * text2() {
      const arr1 = [ 1, 2.1, 2.2, 3.2, 3.22, 4.3, 2.11 ];
      const arr2 = [ 1, 2, 3, 4, 5 ];
      return _.difference(arr1, arr2, Math.floor);
    }
  }
  return Hom;
};

