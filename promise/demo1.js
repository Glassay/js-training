console.log('******1******');
const f = () => console.log('1----->first');
(async () => f())();
// .then(console.log('async'));
console.log('1----->second');

console.log('******2******');
const t = () => console.log('2----->first');
(
  () => new Promise(
    resolve => resolve(t())
  )
)();
console.log('2------>second');
