/**
 * 2017-9-21
 */
//console.log('hello!');
var arr1 = ['a','b','c','d','e'];
var arr2 = [0,1,2,false,'',undefined,NaN,null];
var arr3 = [1,3,5,7,9];
var arr4 = [1, [2, [3, [4]]]];
const _ = require('lodash');
function foo() {
    this.a = 1;
    this.b = 2;
}

//chunk: 将数组分块
console.log('chunk:');
console.log(_.chunk(arr1,2));
console.log(_.chunk(arr2,3));
//compact: 返回数组中不包含false，null，0，“”，undefined，NaN的一个新数组
console.log('compact:');
console.log(_.compact(arr2));
//concat: 连接另一个并返回一个新的数组
console.log('concat:');
console.log(_.concat(arr1,9,arr2));
console.log(arr1,arr2);
//difference:返回一个新的数组，值为前一个不在后一个里面的所有值
console.log('difference:');
console.log(_.difference(arr1,['a','b']));
//differenceBy:和difference相同，可以额外添加方法
console.log('differenceBy:');
console.log(_.differenceBy(arr3,[2.1,3.9],Math.floor));
//differenceWith:
console.log('differenceBy:');
console.log(_.differenceWith(arr3,[1,2,3,6]));
//drop:返回数组中元素的下标从所给值开始的所有元素,若没有给值，则默认从第一个开始
console.log('drop:');
console.log(_.drop(arr3));
console.log(_.drop(arr3,1));
console.log(_.drop(arr3,0));
console.log(_.drop(arr3,4));
//dropRight:和drop相同，但是从右边开始
//dropRightWhile:从右边开始删除，知道时true时停止
//dropWhile:当。。。。。。

//fill:用新的值替换数组中的元素,可以指定范围,左闭右开
/*console.log('fill:');
console.log(_.fill(arr3,'a',3,4));
console.log(_.fill(arr3,2));*/
//find:查找符合要求的第一个元素
//findIndex

//flatten:降低数组第一个的维度
console.log('flatten:');
console.log(_.flatten(arr4));
//flattenDeep:递归的降低（即全部降低）
console.log('flattenDeep:');
console.log(_.flattenDeep(arr4));
//flattenDepth:可以自定义要降低的维度
console.log('flattenDepth:');
console.log(_.flattenDepth(arr4,2));

//toPairs:把key,value返回到一个新的数组中
console.log('toPairs:');
console.log(_.toPairs(new foo));
//fromPairs:和toPairs相反
console.log('fromPairs:');
console.log(_.fromPairs(_.toPairs(new foo)));
//head:获得数组的第一个元素,以值得形式
console.log('head');
console.log(arr3);
console.log(_.head(arr3));
console.log(_.head(arr2));
//indexOf:检索某个元素在数组中的位置
console.log('indexOf:');
console.log(_.indexOf(arr3,2));
//initial:返回一个除了一个数组中最后一个元素的其他元素
console.log('initial:');
console.log(_.initial(arr3));
//intersection:查找两个数组中相同的元素并返回到一个数组
console.log('intersection:');
console.log(_.intersection(arr2,arr3));
//_.intersection([Array],[iteratte=_.identity]):同上，可以加一些方法，类似difference

//join(array,[separator= ' ']):为数组添加分隔符
console.log('join:');
console.log(_.join(arr3,';'));
//last(array):获得数组的最后一个元素
//lastIndexOf:从数组的右边开始检索

//nth:获得数组中指定位置的元素,负数的话从数组末端开始(*从1开始*)
console.log('nyh:');
console.log(arr3);
console.log(_.nth(arr3,2));
console.log(_.nth(arr3,-3));
console.log(_.nth(arr3,-2))
//pull:把数组中指定元素移出数组，会改变原来的数组
console.log('pull:');
console.log(_.pull(arr3,2));
console.log(arr3);
//pullAll(array,value):接受的是另一个数组中的值
//pullAllBy,pullAllWith:可以加方法
//pullAt(array,[index]):指定需要移除元素的位置,改变数组,被移除的元素会返回一个新的数组

//reverse:使数组元素颠倒位置后返回新的数组,会改变原来的数组
console.log('reverse:');
//console.log(_.reverse(arr3));

//slice:取出指定范围的数组中的元素,结果返回到新的数组中,不会修改原数组
console.log('slice:');
console.log(_.slice(arr3,1,2));
console.log(arr3);

//sorteIndex:使用二分查找来确定要插入元素应插入的位置(从大到小)
console.log('sortIndex:');
console.log(_.sortedIndex(arr3,6));
//sorteLastIndex:倒着开始找
console.log(_.sortedLastIndexOf(arr3,3));













