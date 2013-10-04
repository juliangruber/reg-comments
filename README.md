
# reg-comments

Allow comments in JavaScript regular expressions.

Instead of this unreadable mess of chars:

```
(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])
```

add some comments to make it more readable:

```
(?#year)(19|20)\d\d[- /.](?#month)(0[1-9]|1[012])[- /.](?#day)(0[1-9]|[12][0-9]|3[01])
```

Unfortunately JavaScript doesn't yet support comments in regular expressions,
so this library rewrites your RegExp strings to remove them before they're
handed to the parser.

## Usage

Test based on a regular expression with two comments:

```js
var strip = require('reg-comments');

var exp = '^(?#user)[^!]+!(?#post)[^!]+$';

console.log('with comments: %s', exp);
console.log('without comments: %s', strip(exp));
console.log('matches: %s', new RegExp(strip(exp)).test('foo!bar'));
console.log('matches: %s', strip.reg(exp).test('foo!bar'));
```

This outputs:

```bash
$ node example.js
with comments: ^(?#user)[^!]+!(?#post)[^!]+$
without comments: ^[^!]+![^!]+$
matches: true
mathces: true
```

## Syntax

A valid comment starts with `(?#`, followed 0-x characters that aren't
the closing paren, then `)`.

Or, in regular expression form:

```
/\(\?\#[^\)]*\)/
```

## API

### strip(expression)

Given an expression as a string, return a version of that string without
RegExp comments.

Since it's a string, don't forget double escaping:

```js
/\d/ === new RegExp('\\d');
```

### strip.reg(expression[, modifiers])

Create a regular expression object from the stripped version of `expression`
and optional `modifiers`.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install reg-comments
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
