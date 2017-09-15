/** drivers training
 * 
 */

 var arr = ['a','b'];

 function open(x){
    var index = -1;
    //index = arr.indexOf('a');
    if(arr.indexOf('a') < 0){
        console.log('not found!');
    }
    drivers[index].open();
    return index;
 }

var drivers = [{
     name: 'a',
     open: function(x){
         return console.log('a has opened!');

     }
 }];

 var y = open('a');
