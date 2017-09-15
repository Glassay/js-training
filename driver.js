/**2017-9-15 Jifeng Cheng
 * 
 */
//API
var device = ['dev/console', 'dev/display'];
//OS
function open(dev){
    var index = -1;
    index = device.indexOf(dev);
    if(index < 0){
        console.log('not find');
    }
    drivers[index].open();
    return index;

}

function close(dev){
    drivers[dev].close();

}

function read(){

}

function write(dev,content){
   drivers[dev].write(content);

}
//driver
var drivers = [{
    type: 'dev/console',
    open: function(dev){
        return console.log(`dve/console has opened!`);

    },
    write: function(content){
        return console.log(`dev/console has write ${content}`);


    },
    close: function(){
        return console.log(`dev/console has closed`);

    }
},
    {
    type: 'dev/display',
    open: function(dev){
        return console.log('dev/display has opened!');

    },
    write: function(content){
        return console.log(`dev/display has write ${content}`);

    },
    close: function(){
        return console.log('dev/display has closed!');

    }
}];

var fd = open('dev/console');
write(fd,'success');
close(fd);

var fd = open('dev/display');
write(fd,'success');
close(fd);



