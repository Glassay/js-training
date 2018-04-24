/**
 * 2018-04-24 Jifeng Cheng
 */

// 使用 call 或 apply 方法将父对象的构造函数绑定到子对象上

function Animal() {
  this.species = '动物';
}

function Cat(name, color) {
  this.name = name;
  this,color = color;
}

function Cat(name, color) {
  Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}

var cat1 = new Cat('喵喵', '黄色');
console.log(cat1.species);
