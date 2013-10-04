var test = require('tape');
var strip = require('..');

test('reg', function(t) {
  t.equal(
    strip.reg('^(?#user)[^!]+!(?#post)[^!]+$', 'g').toString(),
    /^[^!]+![^!]+$/g.toString()
  );
  t.end();
});

