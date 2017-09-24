function a() {
    return function b(x) {
        return 1 + x;
    }
}
var aaa = a()(6);
console.log(aaa);
console.log(a);
