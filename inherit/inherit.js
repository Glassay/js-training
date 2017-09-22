/**
 * 2017-9-22 Jifeng Cheng
 * 
 */
/*
//构造函数绑定，apply()
function animal() {
    //this.species = 'animal';
}
animal.prototype.species = 'nnn'
function cat(name) {
    animal.apply(this,arguments);
    this.name = name;
}
var a = new cat('miao');
console.log(a);

cat.species = 'bir';
console.log(animal.prototype.species);*/

//prototype模式继承：
/*function animal() {

}
function cat() {

}
cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
console.log(cat.prototype.constructor);*/

/*
//直接继承portotype
function animal() {

}
function cat() {

}
function dog() {

}
animal.prototype.species = 'animal';
cat.prototype = animal.prototype;
dog.prototype = animal.prototype;
cat.prototype.constructor = cat;
dog.prototype.constructor = dog;
cat.prototype.eat = 'meat';
var x = new dog();
console.log(x.eat);
console.log(dog.prototype.species);
console.log(dog.prototype.eat)*/

//利用空对象
/*
function animal() {

}
function cat() {

}
function dog() {

}
var f = function() {

}
f.prototype = animal.prototype;
cat.prototype = new f();
cat.prototype.constructor = cat;
animal.prototype.eat = 'meat';
console.log(cat.prototype.eat);*/

//拷贝继承
function child() {

}
function parent() {

}
function x(child,parent) {
    var p = parent.prototype;
    var c = child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
console.log(child.uber);





