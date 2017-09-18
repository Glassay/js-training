var x = 1;
var y = 1;
var line = '';
for (y = 1;y <= 10;y ++) {
    //var line = '';
    line = line + `${x * y}` + ' '; 
    if (y >= 9) {
        x = x + 1;
        y = 1; 
        //console.log(line + `\n`);
        if (x > 9){
            break;
        } 
    }
}
console.log(`${line}`);

console.log(`1~9: ${line.slice(0,17)}`);
console.log(`2~9: ${line.slice(18,38)}`);
console.log(`3~9: ${line.slice(38,60)}`);
console.log(`4~9: ${line.slice(60,83)}`);
console.log(`5~9: ${line.slice(83,107)}`);
console.log(`6~9: ${line.slice(107,131)}`);

