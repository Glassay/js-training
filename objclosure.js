/**2017-9-17 Jifeng Cheng
 * function中建一个对象，每次调用实现age递增
 * 
 */
var a = function(n) {
    var m = 10;
    return function() {
        var obj = {
            age: m
        };
        m = m + n;
        return obj;
    };

};
var x = a(2);
console.log(x(),x(),x(),x());

