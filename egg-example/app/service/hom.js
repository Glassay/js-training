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
    * text3() {
      const arr1 = [ 1, 2, 3, 4, 5 ];
      const arr2 = [ 'a', 'b', 'c', 'd', 'e' ];
      return _.zipObject(arr1, arr2);
    }
    * text4() {
      const arr = [ 'q', 'w', 'e', 'r' ];
      return _.tail(arr);
    }
    * text5() {
      const arr = [ 1.2, 1.3, 1.4, 2.1, 2.4, 3.1 ];
      return _.groupBy(arr, Math.floor);
    }
    * text6(a, b) {
      return a + b;
    }
    * text7() {
      const t = new Date();
      const s = t.getSeconds();
      const h = t.getHours();
      const m = t.getMinutes();
      const y = t.getFullYear();
      const d = t.getDate();
      const mon = t.getMonth();
      // return y + '年' + mon + '月' + d + '日' + h + ':' + m + ':' + s;
      return `${y}年${this.format(mon + 1)}月${this.format(d)}日${this.format(h)}:${this.format(m)}:${this.format(s)}`;    
    }
    format(x) {
      if (x < 10) {
        return '0' + x;
      }
      return x;
    }
  }

  return Hom;
};

