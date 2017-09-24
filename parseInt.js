/**
 * 2017-9-24 Jifeng Cheng
 * parseInt
 */

 //parseInt:将字符串转换成相应进制的数
 console.log(parseInt('101', 2));
 console.log(parseInt('11', 2));
 console.log(parseInt('hello', 2)); //如果字符串不是数字，则输出NaN；
 console.log(parseInt('0x11', 2));
 //parseFloat:只能解析十进制的数字
 console.log(parseFloat('11', 2));
 console.log(parseFloat('30', 8));
 console.log(parseFloat('0101', 10));
