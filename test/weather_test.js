'use strict'

const expect = require('chai').expect
const fs = require('fs')
const Weather = require('../weather')

describe('Given a file of weather information', () => {
  describe('When the file is parsed', () => {
    it('then we can calculate the spread between the minimum & maximum temp for a day', () => {
      const Weather = new Weather()
      const min = 20
      const max = 35
      const spread = Weather.calcSpread(min, max)
      expect(spread).to.equal(15)
    })
  })
}
