/**2017-9-14 Jifeng Cheng
 * 
 */
var a = {
    name: 'jack',
    age: 20,
    city: 'baoding',

};
for(var key in a){
    console.log(`key => ${key} value => ${a[key]}`);
}