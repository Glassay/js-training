/**2017-9-14 Jifeng Cheng
 * 
 */
var people = {
    man: true,
    age: 10,
    func: function(){
        console.log(`man => ${this.man} age => ${this.age} func => ${this.func}`);
    }
}

people.func();
