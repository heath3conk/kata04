'use strict'

const fs = require('fs')

class Reader {

  constructor (filePath) {
    this.filePath = filePath
  }

  parseFile(callback) {
    fs.readFile(this.filePath, function(err, data) {
      if(err) {
        callback(err)
      }
      callback(null, data.toString().split('\n'))
    })
  }

}

module.exports = Reader
