var fs = require('fs')
var block= (process.argv[2])
fs.readFile(block, function (err, contents) {
  if (err) {
    return console.log(err)
  }
var word = contents.toString().split('\n').length - 1
  console.log(word)
})