for (y = 1;y <= 9;y ++) {     
    var line = [''];
    for (x = 1;x <= y;x ++) {
        line.push(`${x*y}`);
    }console.log(`${line}`);
    
}

for (y = 1;y <= 9;y ++) {     
    var line = '';
    for (x = 1;x <= y;x ++) {
        line = line + `${x * y}` + ' ';

    }
    console.log(`${line}`);
    console.log(`\n`);
    
}

