[![Build Status](https://travis-ci.org/PatrickHeneise/nock-fixtures.svg?branch=master)](https://travis-ci.org/PatrickHeneise/nock-fixtures)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/PatrickHeneise/nock-fixtures/badge.svg?branch=master)](https://coveralls.io/github/PatrickHeneise/nock-fixtures?branch=master)

# Nock Fixtures

nock-fixtures is based on [Nock](https://www.npmjs.com/package/nock) and inspired by the article [How to Test Code that Uses HTTP APIs Using Node.js, Mocha, and Nock](https://www.ctl.io/developers/blog/post/http-apis-test-code).

Just implement it in your any test runner and create / read from fixtures.

## Installation

    npm install nock-fixtures --save-dev

## Usage

```
const fixtures = require('nock-fixtures')

test('list()', assert => {
  const expected = 'something'

  fixtures('whatIsThisAbout')

  list()
    .then(actual => {
      assert.equal(actual, expected, 'list() should match')
      assert.end()
    })
})
```

By default, fixtures are stored in `tests/fixtures`, you can pass options with a different path:

```
const options = {
  path: 'somepath'
}
```

## Test

    npm test

# License

The MIT License (MIT)

Copyright (c) 2016 Patrick Heneise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
