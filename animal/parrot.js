/**
 * 2017-9-22 Jifeng Cheng
 * parrot:
 */
const bird = require('./bird');

var parrot = function() {

}
parrot.prototype = {

};
parrot.prototype.__proto__ = bird.prototype;

module.exports = parrot;
