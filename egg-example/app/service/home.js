/**
 * 2017-9-23 Jifeng Cheng
 */
'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'hello';
    }
  }
  return Home;
};
