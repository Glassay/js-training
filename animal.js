var animal = function() {
}
animal.prototype = {
    eat: function() {
        console.log('need to eat');
    },
    move: function() {
        console.log('can move');
    }
};

var bird = function() {

}
bird.prototype = {
    fly: function() {
        console.log('can fly');
    },
    havefeather: function() {
        console.log('have feather');
    },
    /*act: function() {
        console.log('can learn to speak');
    }*/
    
};
bird.prototype.__proto__ = animal.prototype;

var fish =function() {

}
fish.prototype = {
    
}
fish.prototype.__proto__ = animal.prototype;
var parrot = function() {

};
parrot.prototype = {
    func: function() {
        console.log('sda');
    }
}
parrot.prototype.__proto__ = bird.prototype;

var penguin = function() {

} 
penguin.prototype.__proto__ = bird.prototype;

var shark = function() {

}
shark.prototype.__proto__ = fish.prototype;

var whale = function() {

}
whale.prototype.__proto__ = fish.prototype;
//var m = new bird();
var parrot = new bird();
parrot.fly();
parrot.havefeather();
parrot.eat();
parrot.move();
//m.fly();

var a = Object.create(Function.prototype,[]);
console.log(typeof a);
console.log(typeof parrot);