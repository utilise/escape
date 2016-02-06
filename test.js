var expect = require('chai').expect
  , escape = require('./')

describe('escape', function() {
  it('should escape html', function() {
    expect(escape('<div></div>')).to.eql('&lt;div&gt;&lt;/div&gt;')
  })
})