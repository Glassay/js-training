//setTimeout
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 3000);
// }

// console.log(new Date, i);
// console.log(new Date);

//闭包
// var num=0;     //全局变量 
// function a(){
//    num++;               //模块级可以调用全局变量，进行累加
// }
//    a();   //1
//    a();   //2           //执行函数，累加了 
//    console.log(num);
//调用匿名函数进行累加
// function a(){
//   var num=0;
//   // num++;
//   return function() {
//     num ++;
//     return num;
//   }
// }
// var b = a();
// console.log(b());
// console.log(b());
// console.log(b());

//setTime(func, 0)
setTimeout(function() {
  console.log("Timeout");
}, 0);
function a(x) {
  console.log("a() 开始运行");
  b(x);
  console.log("a() 结束运行");
}
function b(y) {
  console.log("b() 开始运行");
  console.log("传入的值为" + y);
  console.log("b() 结束运行");
}
console.log("当前任务开始");
a(42);
console.log("当前任务结束");