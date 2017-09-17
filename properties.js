var obj1 = Object.create(null, {
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
var obj2 = {};
console.log(Object.defineProperties(obj2, {
    'a': {
        value: true,
        writable: true ,
        enumerable: true
    },
    'b': {
        value: 'Hello',
        writable: true,
        enumerable: true
    },
}));


console.log(Object.defineProperties(obj2, {
    'a': {
        value: true,
        writable: true ,
        enumerable: true
    },
    'b': {
        value: 'Hello',
        writable: true,
        enumerable: true
    },
    'a': {
        value:'hi',
        writeable:true,
        enumerable:true
    }
}));

console.log(Object.defineProperties(obj1, {
    bos: {
        value: 'world!',
        writeable:true,
        enumerable: true
    }
}))
