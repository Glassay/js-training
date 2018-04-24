/**
 * 2018-04-24 Jifeng Cheng
 */

// 对 demo2 的一种改进

function Animal() {
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.species = '动物';

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

var cat1 = new Cat('喵喵', '黄色');
console.log(cat1.species);
