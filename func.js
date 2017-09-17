function func() {
    return function x() {
        return function y(m,n) {
            return m + n;

        }
    }
}
var a = func();
var b = a();
var c = b;

console.log(a);
console.log(b);
console.log(c);
console.log(c(1,2));
console.log(b.a,c.b);
console.log(a.b,a.c);

