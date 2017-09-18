var x = 1;
var y = 1;
var line = '';
for (y = 1;y <= 10;y ++) {
    //var line = '';
    line = line + `${x * y}` + ' '; 
    if (y >= 9) {
        x = x + 1;
        y = x -1; 
        //console.log(line + `\n`);
        if (x > 9){
            break;
        } 
    }
}
console.log(`${line}`);

console.log(`1: ${line.slice(0,17)}`);
console.log(`2: ${line.slice(18,38)}`);
console.log(`3: ${line.slice(39,58)}`);
console.log(`4: ${line.slice(59,76)}`);
console.log(`5: ${line.slice(77,91)}`);
console.log(`6: ${line.slice(92,103)}`);
console.log(`7: ${line.slice(104,113)}`);
console.log(`8: ${line.slice(113,118)}`);
console.log(`9: ${line.slice(119,121)}`);

