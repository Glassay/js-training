/**
 * 2017-9-22 Jifeng Cheng
 * animal:
 */
//const bird = require('./bird');
function animal() {

}
animal.prototype = {
    eat: function() {
        console.log('need to eat');
    },
    move: function() {
        console.log('can move');
    }
};


module.exports = animal;
