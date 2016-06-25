'use strict'

var nock = require('nock')
var path = require('path')
var fs = require('fs')

module.exports = exports = function (fixture, options) {
  options = options || {
    path: path.join(process.env.PWD, 'tests', 'fixtures')
  }

  if (!fixture) {
    throw new Error('fixture not defined')
  }

  try {
    fs.statSync(options.path)
  } catch (e) {
    throw new Error(options.path + ' does not exist. Please create the folder first.')
  }

  var fixturePath = path.join(options.path, fixture + '.js')

  try {
    fs.statSync(fixturePath)
    require(fixturePath)
    nock.recorder.play()
  } catch (e) {
    fs.writeFileSync(fixturePath, "'use strict';\n\nvar nock = require('nock');\n\n")

    nock.recorder.rec({
      use_separator: false,
      logging: function (content) {
        fs.appendFile(fixturePath, content)
      }
    })
  }
}
