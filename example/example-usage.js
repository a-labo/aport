'use strict'

const aport = require('aport')
const co = require('co')

co(function * () {
  let port = yield aport()
  console.log('Free port :', port)
}).catch((err) => console.error(err))
