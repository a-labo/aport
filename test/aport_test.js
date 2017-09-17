/**
 * Test case for aport.
 * Runs with mocha.
 */
'use strict'

const aport = require('../lib/aport.js')
const assert = require('assert')

describe('aport', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Aport', async () => {
    let port = await aport()
    assert.ok(port)
  })
})

/* global describe, before, after, it */
