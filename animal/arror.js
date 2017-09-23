/**
 * 2017-9-23 Jifeng Cheng
 */

 var a = app => {
    this.age = 20;
 };
 a();
 console.log(typeof a.prototype)
 console.log(a.age,this.age);
 console.log(a);


 /*var x = new a;
 console.log(typeof x.prototype);*/