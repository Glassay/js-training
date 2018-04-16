/**
 * 2018-04-16 Jifeng Cheng
 */

console.log('b is starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done );
exports.done = true;
console.log('b done');
