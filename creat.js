/**
 * 2017-9-19 Jifeng Cheng
 * Object.create()
 */
var person = {
    age: 1
}
var a = Object.create(person,{
    age: {
        value: 20
    }
});
console.log(`typeof a.proto: ${typeof a.__proto__}`);
console.log(`person,{}: ${person,{}}`);

person.se = function() {
    return name = 'cheng';
}
console.log(`person.se(): ${person.se()}`);

a.__proto__.name = 1;
console.log(`a.se(): ${a.se()}`);
console.log(`person.name: ${person.name}`);

var b = Object.create(person,{
    name: {
        value: 'wang'
    }
})
console.log(`b.name: ${b.name}`);

var c = Object.create(person,{});
b.__proto__.we = 3;
console.log(`a.we: ${a.we}`);

console.log(`a.age,b.age: ${a.age},${b.age}`);

var str = 'a';
var arr = [1,2];
var num = 1;
var bool = false;

console.log(`str.prototype: ${typeof str.prototype}`);
console.log(`str.proto: ${typeof str.__proto__}`);
console.log(`typeof str: ${typeof str}`);
console.log(`num.proto: ${num.__proto__}`);

console.log(`arr.prototype: ${typeof arr.prototype}`);
console.log(`arr.proto: ${typeof arr.__proto__}`);
console.log(`typeof arr: ${typeof arr}`);
console.log(`typeof Array: ${typeof Array}`);
console.log(`typeof String: ${typeof Strig}`);
console.log(`typeof String.proto: ${typeof String.__proto__}`);
console.log(`typeof String.prototype: ${typeof String.prototype}`);

console.log(`compare typeof 'arr' and 'Object.propotype': ${typeof arr === typeof Object.prototype}`);
console.log(`compare typeof 'str.proto' and 'Object.proto': ${typeof str.__proto__ === typeof Object.__proto__}`);
console.log(`compare typeof 'str.proto' and 'Object.prototype': ${typeof str.__proto__ === typeof Object.prototype}`);
console.log(`compare typeof 'str.proto' and 'Function.prototype.ptoto': ${typeof str.__proto__ === typeof Function.prototype.__proto__}`);
console.log(`compare typeof 'str.protp.proto' and 'Objcet.proto.proto': ${typeof str.__proto__.__proto__ === typeof Object.__proto__.__proto__}`);
console.log(`compare 'arr.proto' and 'str.proto': ${arr.__proto__ === str.__proto__}`);
console.log(`compare 'arr.proto.proto' and 'Object.prototype' proto: ${arr.__proto__.__proto__ === Object.prototype}`);
console.log(`compare 'arr.proto.proto' and 'Object.prototype': ${arr.__proto__.__proto__ === Object.prototype}`);
console.log(`typeof 'compare arr.proto and Array.rototype': ${arr.__proto__ === Array.prototype}`);
console.log(`compare 'arr.proto and Array.prototypr: ${arr.__proto__ === Array.prototype}`);
console.log(`compare num.proto and Number.prototype: ${num.__proto__ === Number.prototype}`);
console.log(`num.proto.proto: ${ typeof num.__proto__.__proto__}`);
console.log(`compare num.proto.proto and Number.prototype: ${num.__proto__.__proto__ === Number.prototype}`);
console.log(`Number.prototype.proto: ${typeof Number.prototype.__proto__}`);
console.log(`compare Number.prototype.proto and Object.prototype: ${Number.prototype.__proto__ === Object.prototype}`);
console.log(`compare num.proto.proto and Number.prototype: ${num.__proto__.__proto__ === Number.prototype}`);
console.log(`compare num.proto and Number.prototype.proto: ${num.__proto__ === Number.prototype.__proto__}`);
console.log(`compare num.proto.proto and Number.prototype.proto: ${num.__proto__.__proto__ === Number.prototype.__proto__}`);
console.log(`Boolean.prototype.proto: ${typeof Boolean.prototype.__proto__}`);
console.log(`Boolean.prototype.proto and Object.portotype: ${typeof Boolean.prototype.__proto__ === typeof Object.prototype}`);
console.log(`compare Boolean.prototype and bool.proto: ${Boolean.prototype === bool.__proto__}`);
console.log(`compare bool.proto.proto and Boolean.prototype.proto: ${bool.__proto__.__proto__ === Boolean.prototype.__proto__}`);
console.log(`Function.prototype.constructor and Function: ${Function.prototype.constructor === Function}`);





