/**
 * 2017-9-22 Jifeng Cheng
 * shark:
 */
const fish = require('./fish');
var shark = function() {
    
    }
shark.prototype.__proto__ = fish.prototype;
module.exports = shark;