/**
 * 2018-04-16 Jifeng Cheng
 */

console.log('a is starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
