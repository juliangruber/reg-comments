var strip = require('./');

var exp = '^(?#user)[^!]+!(?#post)[^!]+$';

console.log('with comments: %s', exp);
console.log('without comments: %s', strip(exp));
console.log('matches: %s', new RegExp(strip(exp)).test('foo!bar'));
console.log('matches: %s', strip.reg(exp).test('foo!bar'));

