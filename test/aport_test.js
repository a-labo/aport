/**
 * Test case for aport.
 * Runs with mocha.
 */
'use strict'

const aport = require('../lib/aport.js')
const assert = require('assert')
const co = require('co')

describe('aport', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Aport', () => co(function * () {
    let port = yield aport()
    assert.ok(port)
  }))
})

/* global describe, before, after, it */
