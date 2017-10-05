const assert = require('assert')
const vinylFile = require('vinyl-file')
const { describe, it, timeout } = require('kocha')
const xat = require('./')

describe('gulp-xat', () => {
  it('renders file contents as xat template', done => {
    vinylFile.read('example.xat').then(file => {
      const stream = xat()

      stream.on('data', file => {
        assert.strictEqual(file.contents.toString(), '<div class="wrapper"><div><p>Hello, xat!</p></div></div>')

        done()
      })
      .write(file)
    }).catch(done)
  })
})
