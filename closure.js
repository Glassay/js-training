/**2017-9-17 Jifeng Cheng
 * 
 *  div function
 */
var div = function(x){
    var d = 3;
    return function(y){
        return x / y / d;
    }
}
var a = div(4);
var c = a(2);
console.log(c);
