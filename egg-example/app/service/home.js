/**
 * 2017-9-23 Jifeng Cheng
 */
'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'hello';
    }
    * sina() {
      return yield app.curl('https://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('https://www.sohu.com');
    }
    * text1() {
      return 'cheng';
    }
    * text2() {
      const arr1 = [ 1, 2, 3, 4, 5 ];
      return arr1;
    }
  }
  return Home;
};
