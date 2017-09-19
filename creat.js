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
console.log(`str.prototype: ${typeof str.prototype}`);
console.log(`str.proto: ${typeof str.__proto__}`);
console.log(`typeof str: ${typeof str}`);

var arr = [1,2];
console.log(`arr.prototype: ${typeof arr.prototype}`);
console.log(`arr.proto: ${typeof arr.__proto__}`);
console.log(`typeof arr: ${typeof arr}`);

console.log(`compare typeof 'arr' and 'Object.propotype': ${typeof arr === typeof Object.prototype}`);
console.log(`compare typeof 'string' and 'Object.proto': ${typeof string === typeof Object.__proto__}`);
console.log(`compare typeof 'string' and 'Function.prototype': ${typeof string === typeof Function.prototype}`);
console.log(`compare typeof 'string' and 'Function.proto': ${typeof string === typeof Function.__proto__}`);
console.log(`compare typeof 'string' and 'Objcet.proto.proto': ${typeof string === typeof Object.__proto__.__proto__}`);


