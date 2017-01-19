'use strict'

var expect = require('chai').expect
var FS = require('fs')
const Reader = require('../reader')

describe('Given a component', ()=>{
  describe('when given a filename', ()=>{
    it('then data is returned from the file', (done)=>{
      const reader = new Reader('/Users/localadmin/workspace/kata04/weather.dat')

      reader.parseFile((err,fileData)=>{

        console.log(fileData);
        expect(fileData[0]).to.equal("  Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn WxType PDir AvSp Dir MxS SkyC MxR MnR AvSLP")
        done()
      })
    })
  })
})
