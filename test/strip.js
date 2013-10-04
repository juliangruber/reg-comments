var test = require('tape');
var strip = require('..');

test('strip', function(t) {
  t.equal(strip('^(?#user)[^!]+!(?#post)[^!]+$'), '^[^!]+![^!]+$');
  t.end();
});

