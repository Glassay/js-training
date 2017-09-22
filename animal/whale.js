/**
 * 2017-9-22 Jifeng Cheng
 * whale:
 */
const fish = require('./fish');
var whale = function() {
    
    }
whale.prototype.__proto__ = fish.prototype;
module.exports = whale;