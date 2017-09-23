/**
 * 2017-9-23 Jifeng Cheng
 */

function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hello world');
        }, 1000);
    });
}

asyncFunction().then(function(value) {
    console.log(`1--${value}`);
    return value;

}).then(function(value) {
    console.log(`2--${value}`);
    return {
        value: 'halo',
        age: 2
    }
}).then(function (value) {
    console.log(`3--${value.value} age:${value.age}`);
    //return value;
    console.log(a);
}).catch(function(error) {
    console.log(`catch--${error}`);
    return 'hi';
}).then(function(value) {
    console.log(`4--${value.value} age:${value.age}`)
    //console.log(`5--${value.value} age:${value.age}`);
    console.log(`5--${value}`);
});

