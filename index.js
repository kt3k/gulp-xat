const xat = require('xat')
const through2 = require('through2')

module.exports = () => through2.obj((file, enc, cb) => {
  const newFile = file.clone()
  newFile.contents = Buffer.from(xat(file.path), 'utf-8')
  cb(null, newFile)
})
