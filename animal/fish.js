/**
 * 2017-9-22 Jifeng Cheng
 * fish:
 */
const animal = require('./animal');
var fish =function() {

}
fish.prototype = {

}
fish.prototype.__proto__ = animal.prototype;
module.exports = fish;
