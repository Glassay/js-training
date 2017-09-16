var a = function func(){

};
a.stu = {
    name: 'cheng',
    age: 12
};
a.arr = [1,2,3];
a.func = function (){

};

Object.defineProperty(a, 'len', {
    enumerable: true,
    get: function(){
       return this.arr.length;
    }
});
console.log(a.len);










//console.log(Object.getOwnPropertyDescriptor();