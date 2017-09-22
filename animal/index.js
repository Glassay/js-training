/**
 * 2017-9-22 Jifeng Cheng
 */
//const animal = require('./animal');
const bird = require('./bird');
/*const fish = require('./fish');
const parrot = require('./parrot');
const penguin = require('./penguin');
const shark = require('./shark');
const whale = require('./whale');*/

var parrot = new bird();
parrot.fly();
parrot.havefeather();
parrot.eat();
parrot.move();