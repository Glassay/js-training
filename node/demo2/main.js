/**
 * 2018-04-16 Jifeng Cheng
 * Cycles Modules
 */

console.log('main is starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
