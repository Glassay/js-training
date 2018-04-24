/**
 * 2018-04-24 Jifeng Cheng
 */

// 通过 prototype 属性

function Animal() {
  this.species = '动物';
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype = new Animal(); // 将 Cat 的 prototype 属性指向一个 Animal 的实例
Cat.prototype.constructor = Cat; // 如果不加这一行, Cat.prototype.constructor 会指向 Cat, 加了之后就指向了 Animal
var cat1 = new Cat('喵喵', '黄色');
console.log(cat1.species);
