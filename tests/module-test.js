'use strict'

const test = require('tape')
const fixtures = require('../../nock-fixtures')

test('module export output type', assert => {
  const actual = typeof fixtures
  const expected = 'function'

  assert.equal(actual, expected,
    'fixtures() should return a function.')

  assert.end()
})
