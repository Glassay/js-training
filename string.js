/**2017-9-17 Jifeng Cheng
 * string method
 * 
 * charAt, concat, includes, endsWith, indexOf
 * 
 */
var str = 'hello cheng';

//charAt:查找指定位置的字符串，大于或是负数为空
console.log(`charAt(1): ${str.charAt(100)}`);
console.log(`charAt(-3): ${str.charAt(-3)}`);
console.log(`charAt(0): ${str.charAt(0)}`);

//concat:链接字符串
console.log(`concat(sta !!!): ${str.concat(' !!!')}`);

//includes:查找str中的某部分字符中是否有所查字符，有返回true，否则返回false，也可以指定从某个位置开始查找，负数默认为从零开始查找；
console.log(`includes(he): ${str.includes('he')}`);
console.log(`includes(str): ${str.includes('str')}`);
console.log(`includes(hello,1): ${str.includes('hello',1)}`);
console.log(`includes(he,20): ${str.includes('he',20)}`);
console.log(`includes(he,-3): ${str.includes('he',-3)}`);
console.log(`includes(he,0): ${str.includes('he',0)}`);
console.log(`includes(str,-1): ${str.includes('str',-1)}`);

//endsWith:看某一个字符是否是str的结束字符，可以指定结束的范围，0和超过范围和负数都不行；
console.log(`endsWith(h): ${str.endsWith('h')}`);
console.log(`endsWith(g): ${str.endsWith('g')}`);
console.log(`endsWith(!): ${str.endsWith('!')}`);
console.log(`endsWith(lo,5): ${str.endsWith('lo',5)}`);
console.log(`endsWith(lo,0): ${str.endsWith('lo',0)}`);
console.log(`endsWith(' ',5): ${str.endsWith(' ',5)}`);
console.log(`endsWith(lo,-5): ${str.endsWith('lo',-5)}`);
console.log(`endsWith(lo,30): ${str.endsWith('lo',30)}`);

//indexOf:查找一个字符串是否在str这个字符串中，可以指定从哪里开始查找，找到返回要查找字符对应的第一个字符的位置，找不到则返回-1；负数也可以进行查找
console.log(`indexOf(he,0): ${str.indexOf('he',0)}`);
console.log(`indexOf(he,1): ${str.indexOf('hello',1)}`);
console.log(`indexOf(he,30): ${str.indexOf('he',30)}`);
console.log(`indexOf(he,-4): ${str.indexOf('he',-4)}`);

//padEnd:在str后面添加一定的字符，添加长度以target为准，添加的字符会一直添加知道长度满足target；
console.log(`padEnd(13): ${str.padEnd(13)}`)
console.log(`padEnd(8): ${str.padEnd(8,'jifeng')}`);
console.log(`padEnd(13,jifeng): ${str.padEnd(13,'jifeng')}`);
console.log(`padEnd(20,jifeng): ${str.padEnd(20,'jifeng')}`);
console.log(`padEnd(0,jifeng): ${str.padEnd(0,'jifeng')}`);
console.log(`padEnd(-15,jifeng): ${str.padEnd(-15,'jifen')}`);

//padStart:在str前面添加字符串，知道达到给定的长度，从左往右开始；
console.log(`padStart(15,jifeng): ${str.padStart(15,'jifeng')}`);
console.log(`padStart(15): ${str.padEnd(15)}`);
console.log(`padStart(20,jifeng): ${str.padStart(20,'jifeng')}`);
console.log(`padStart(8,jifeng): ${str.padStart(8,'jifeng')}`);
console.log(`padStart(-20,jifeng): ${str.padStart(-20,'jifeng')}`);