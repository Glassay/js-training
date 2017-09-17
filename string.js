/**2017-9-17 Jifeng Cheng
 * string method
 * 
 * charAt, concat, includes, endsWith, indexOf
 * 
 */
var str = '    hello cheng hello cheng hi    ';

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

//reoeat(count):复制str，复制的次数取决于count的值；0：不复制，负数：抛出异常
//console.log(`repeat(-1): ${str.repeat(-1)}`);抛出异常
console.log(`repeat(0): ${str.repeat(0)}`);
console.log(`repeat(2): ${str.repeat(2)}`);
console.log(`repeat(2.4): ${str.repeat(2.4)}`);
console.log(`repeat(3.4): ${str.repeat(3.4)}`);
//console.log(`repeat(1/0): ${str.repeat(1/0)}`);抛出异常

//raplace:直接替换字符
console.log(`replace: ${str.replace('h','r')}`);
console.log(`replace(substr,function): ${str.replace('hello',function func(str){
    var str = 'hi';
    return str;
})}`)

//slice:从slice中截取一定长度的字符串，负数不行，超出str范围不影响，左闭有开
console.log(`slice(1,2): ${str.slice(1,2)}`);
console.log(`slice(0,6): ${str.slice(0,6)}`);
console.log(`slice(-4,6): ${str.slice(-4,6)}`);
console.log(`slice(0,30): ${str.slice(0,30)}`);

//split:切掉str中的某一部分字符串，并确定要分成多少份，如果要切空字符串就相当于直接根据后面的值进行分组，超出的直接舍去，
console.log(`split('lo',4): ${str.split('lo',4)}`);
console.log(`split('lo',1): ${str.split('lo',1)}`);
console.log(`split('lo',0): ${str.split('lo',0)}`);
console.log(`split('',1): ${str.split('',1)}`);
console.log(`split('lo',10): ${str.split('lo',10)}`);
console.log(`split('',30): ${str.split('',30)}`);
console.log(`split('',-1): ${str.split('',-1)}`);
console.log(`split('',-20): ${str.split('',-20)}`);
console.log(`split('lo',-1): ${str.split('lo',-1)}`);
console.log(`split('che'-10): ${str.split('che',-10)}`);

//startsWith:看是不是以某个字符串开头,可以自定义从哪个位置开始
console.log(`startswith('hello): ${str.startsWith('hello')}`);
console.log(`startswith('ello): ${str.startsWith('ello')}`);
console.log(`startswith('hello): ${str.startsWith('hello')}`);
console.log(`startswith('llo‘,2): ${str.startsWith('llo',2)}`);

//substr:取str中的某一串字符，可以规定范围
console.log(`substr('1,2'): ${str.substr(1,2)}`);
console.log(`substr('-1,2'): ${str.substr(-1,2)}`);
console.log(`substr('-1,-2'): ${str.substr(-1,-2)}`);
console.log(`substr('1,-2'): ${str.substr(1,-2)}`);
console.log(`substr('1,30'): ${str.substr(1,30)}`);
console.log(`substr('0,30'): ${str.substr(0,30)}`);

//trim:删除两端的空格
console.log(`trim(): ${str.trim()}`);

//trimLeft:删除左边空格
console.log(`trimLeft(): ${str.trimLeft()}`);

//trimRight:删除右边空格
console.log(`trimRight(): ${str.trimRight()}`);




