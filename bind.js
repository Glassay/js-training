var obj = {

}
function func(x) {
    this.a = x + 2;
}
console.log(func.apply(obj,[2]));
console.log(obj);