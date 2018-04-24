/**
 * 2018-04-22 Jifeng Cheng
 */

function fun3() {
  console.log('fun3');
}

function fun2() {
  fun3();
}

function fun1() {
  fun2();
}

fun1();
