/**
 * 2017-9-22 Jifeng Cheng
 * penguin:
 */
const bird = require('./bird');

function penguin() {
    
} 
penguin.prototype.__proto__ = bird.prototype;
module.exports = penguin;
