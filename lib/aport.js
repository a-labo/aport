/**
 * Find a free port
 * @function aport
 * @param {Object} [options] - Optional settings
 * @param {string} [options.host='127.0.0.1'] - Host to aport port
 * @returns {Promise.<number>}
 */
'use strict'

const net = require('net')
const co = require('co')

/** @lends aport */
function aport (options) {
  options = options || {}
  let host = options.host || '127.0.0.1'

  return co(function * () {
    let server = net.createServer()
    let port = null
    server.on('listening', () => {
      port = server.address().port
      server.close()
    })

    return new Promise((resolve, reject) => {
      server.on('close', () => resolve(port))
      server.on('error', (err) => reject(err))
      server.listen(0, host)
    })
  })
}

module.exports = aport
