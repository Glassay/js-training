var a = 2;
(function iife(global) {
  var a = 3;
  console.log('内部：', a);
  console.log('外部：', global.a);
  // console.log('global:', global);
})(window) // 这里的 window 会作为参数传递到 IIFE 函数里面的 function iife 中的 global 中去
