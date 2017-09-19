/*for (y = 1;y <= 9;y ++) {     
    var line = [''];
    for (x = 1;x <= y;x ++) {
        line.push(`${x*y}`);
    }console.log(`${line}`);
    
}*/
console.log(`   1 2  3  4  5  6  7  8  9`);
for (y = 1;y <= 9;y ++) {     
    var line = '';
    for (x = 1;x <= y;x ++) {
        line = line + `${x * y}` + ' ';

    }
    //console.log('乘法表');
    console.log(`${x - 1}  ${line}`);
    
}


