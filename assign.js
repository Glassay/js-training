var source = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello',
        enumerable: true
    },

    baz: {
        writable: true,
        configurable: true,
        value: 'hi',
        enumerable: false
    }
})

var target = {};
Object.assign(target, source);
console.log(target, source);
console.log(source.baz, target.baz);