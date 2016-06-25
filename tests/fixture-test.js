'use strict'

const test = require('tape')
const fixtures = require('../../nock-fixtures')
const request = require('request')
const fs = require('fs')
const nock = require('nock')
const path = require('path')

test('nock-fixtures() should throw an error', assert => {
  const expected = new Error('fixture not defined')

  assert.throws(fixtures, expected,
    'nock-fixtures() throws undefined fixture error')

  assert.end()
})

test('nock-fixtures() should throw an error', assert => {
  const options = {
    path: 'somepath'
  }
  const expected =
  /somepath does not exist. Please create the folder first./
  const actual = function () {
    fixtures('test', options)
  }

  assert.throws(actual, expected,
    'nock-fixtures() throws unknown directory error')

  assert.end()
})

test('nock-fixtures() should record fixtures', assert => {
  const expected = [
    'GET http://google.com:80/'
  ]

  fixtures('google.fixtures')
  request('http://google.com', () => {
    try {
      fs.statSync(path.join(__dirname, 'fixtures', 'google.fixtures.js'))
      require(path.join(__dirname, 'fixtures', 'google.fixtures.js'))

      let actual = nock.pendingMocks()

      assert.deepEqual(actual, expected, 'google fixtures recorded')
      assert.end()
    } catch (e) {
      assert.fail(e)
    }
  })
})

test('nock-fixtures() should play fixtures', assert => {
  const expected = [
    'GET http://google.com:80/'
  ]

  fixtures('google.fixtures')
  let actual = nock.pendingMocks()
  assert.deepEqual(actual, expected, 'google fixtures recorded')
  assert.end()
})

test('cleanup', assert => {
  fs.unlinkSync(path.join(__dirname, 'fixtures', 'google.fixtures.js'))
  assert.end()
})
