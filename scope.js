/** Jifeng Cheng 2017-9-18
 * 
 */
var a = 1;
var a = 3;
if (a < 2) {
    var x = 2 + a;
    var y = x + a;
}
else if (a > 2) {
    var obj = {
        arr: ['x', 'y', 'z']
    }
}
console.log(`obj: ${obj}`);
console.log(`if x: ${x}`);
console.log(`if y: ${y}`);

for (var i = 0;i <4;i++) {
    var y = a + i;
}
console.log(`for: ${y} `);

while(a >  0) {
    var z = a + 1;
    a = a - 1;
}
console.log(`while: ${z}`);

do {
    a = a + 1;
    var l = a ++;
}while(a < 10)
console.log(`do...while...: ${l}`);

var x = 3;
switch(x) {
    case 1: 
    console.log(`switch(1): ${a+1}`);
    case 3:
    var m = a + 2;
}
console.log(`switch: ${m}`);





