/**
 * 2017-9-20 Jifeng Cheng
 */

 var person = {
     age: 10
 }
 var num = 2;
 var a = Object.create(person,{
         name: {
             writable: true,
             configurable: true,
             value: 'cheng',
             enumerable: false
        },
        adress: {
            writable: true,
            configurable: true,
            value: 'lalala',
            enumerable: true
     }
 });
Object.prototype = {
    age: {
        writable: true,
        configurable: true,
        value: 10,
        enumerable: false
     }
}
Object.freeze(Object.prototype);
//Object.freeze(a);
//Object.seal(Object.prototype);
Number.prototype.gel = function() {
    num1 = 4;
    return num1;
}
Object.prototype.age = 30;
//delete Object.prototype.age;
console.log(num.gel());
console.log(a);
console.log(`a: ${a}`);  
console.log(`a.name: ${a.name}`);
console.log(a.age);
console.log(`a.age: ${a.age}`);


