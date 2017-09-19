/**
 *20107-9-19 Jifeng Cheng 
 *proto prototype
 */
var person = function(age) {
    this.age = age;
    return age;
}

var per = new person(20);
var cheng = new person(10);
person.prototype.getAge = function() {
    return this.age;
}
per.setAge = function() {
    return this.age = 20 + 2;
}
cheng.putAge = function() {
    return this.age = 20 + 3
}
per.getAge = function() {
    return this.age = 20 + 4
}
Object.prototype.so = function() {
    console.log('seccess!');
}
cheng.__proto__.sel = function() {
    return this.age = 20 + 5
}
console.log(per.getAge(),cheng.getAge());
console.log(cheng.putAge());
//console.log(cheng.setAge()); cheng不能调用per的setAge方法
console.log(per.setAge());
//console.log(per.putAge()); per不能调用cheng的putAge方法
//console.log(per.sellAge());

console.log(`per.setAge.prototype: ${typeof per.setAge.prototype}`);
console.log(`compare person and per.setAge: ${typeof person.prototype === typeof per.setAge.prototype}`);
//console.log(per.getAge());
console.log(per.so());
console.log(person.so());
console.log(per.sel());
console.log(person(10));



