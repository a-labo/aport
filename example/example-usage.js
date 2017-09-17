'use strict'

const aport = require('aport')

;(async () => {
  // Find free port
  let port = await aport()
  console.log('Free port :', port)
}).catch((err) => console.error(err))
