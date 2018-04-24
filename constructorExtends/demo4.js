/**
 * 2018-04-24 Jifeng Cheng
 */

// 第四种方法中对 Cat.prototype 进行的任何修改都会映射到 Animal.prototype
// 所以 demo4 是对 demo3 的一种改进, 利用空对象作为一个中介

function Animal() {
  this.species = '动物';
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var F = function() {}

F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

var cat1 = new Cat('喵喵', '黄色');
console.log(cat1.species);
