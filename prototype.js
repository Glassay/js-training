/**
 * 2017-9-19 Jifeng Cheng
 * prototype and proto
 */
var obj = function () {

};
console.log(`typeof Function: ${typeof Function}`);
console.log(`typeof Object: ${typeof Object}`);
console.log(`typeof Object.protopype: ${typeof Object.prototype}`);
console.log(`typeof Function.prototype: ${typeof Function.prototype}`);
console.log(`compare Function and Object prototype: ${typeof Function.prototype === typeof Object.prototype}`);
console.log(`compare function and Object proto: ${typeof Function.__proto__ === typeof Object.__proto__}`);
console.log(`compare (Function.prototye).proto and object.prototype: ${typeof (Function.prototype).__proto__ === typeof Object.prototype}`);
console.log(`compare Function.prototpe and Function.proto: ${typeof Function.prototype === Function.__proto__}`);
console.log(`typeof (Function.prototype).prototype: ${typeof (Function.prototype).prototype}`);
console.log(`typeof (Object.prototype).proto: ${typeof (Object.prototype).__proto__}`);
//console.log(`typeof (obj.proto).proto: ${typeof (obj.proto).proto}`);
console.log(`typeof obj.proto: ${typeof obj.__proto__}`);
console.log(`compare Object.proto and Function.proto: ${typeof Object.__proto__ === typeof Function.__proto__}`);
console.log(`typeof obj.prototype： ${typeof obj.prototype}`);
console.log(`(Object.prototype).proto: ${(Object.prototype).__proto__}`);
console.log(`typeof obj.proto: ${typeof obj.__proto__}`);
console.log(`compare Object.prototype and Object.prototype.proto: ${typeof Object.prototype === typeof Object.prototype.__proto__}`);
console.log(`typeof null: ${typeof null}`);
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof obj.prototype: ${typeof obj.prototype}`);