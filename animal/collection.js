/**
 * 2017-9-22 Jifeng Cheng
 * collection method
 */
const _ = require('lodash');
 //filter:
 var users = [
    { 'user': 'zhang', 'age': 36, 'active': true },
    { 'user': 'cheng',   'age': 40, 'active': false }
  ];
 console.log('gather:');
 console.log(_.filter(users,true));

 //findLast:倒着开始找
 console.log(_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
}));

//flatMap:迭代collection中的每个元素并调用迭代的元素
console.log('forEach:');
console.log(_.forEach([1, 2], function(value) {
  console.log(value);
}));
