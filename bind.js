var obj = {

}
function func(a) {
    this.a = 2 + 3;
    return a;
}
console.log(func.apply(obj));
console.log(obj);

console.log(func.apply(obj,[2]));
console.log(obj);
