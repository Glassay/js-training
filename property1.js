/**2017-9-16 Jifeng Cheng
 * Object.create
 * Object.defineProperty
 * 
 */
var source = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello',
        enumerable: true
    }


})
console.log(source.foo);
console.log(Object.defineProperty(source, 'fox', {
    writable: true,
    configurable: true,
    value: 'hi',
    enumerable: true
}));
console.log(source);

var arr = [1,2];
console.log(Object.defineProperty(arr, '4', {
    writable: true,
    configurable: true,
    value: 128,
    enumerable: true
}));

console.log(Object.defineProperty(arr, 'length', {
    writable: true,
    configurable: true,
    value: 4,
    enumerable: true
}));

