var fs = require('fs')
var block= fs.readFileSync(process.argv[2])
var word = block.toString().split('\n').length - 1
console.log(word)