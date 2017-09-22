/**
 * 2017-9-22 Jifeng Cheng
 * bird:
 */
const animal = require('./animal');
function bird() {

}
bird.prototype = {
    fly: function() {
        console.log('can fly');
    },
    havefeather: function() {
        console.log('have feather');
    },
    
};
bird.prototype.__proto__ = animal.prototype;

module.exports = bird;
