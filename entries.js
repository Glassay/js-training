var obj = Object.create(null, {
    bas: {
        writable: true,
        configurable: true,
        value: 'hello',
        enumerable: true
    },
    bos: {
        writable: true,
        configurable: true,
        value: 'moto!',
        enumerable: true

    }
});
console.log(Object.entries(obj));
//console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.keys(obj));

