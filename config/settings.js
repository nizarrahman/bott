const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281386945391'] // no own
global.author = 'Nizar Rahman' // nama author 
global.packname = 'Nai Developer' // nama pack sticker
global.namabot = 'Nai Bot Store V2' // nama bot mu
global.group = 'https://naistore.site' // grup mu
global.pic = 'https://telegra.ph/file/36211850fa46193ef96ad.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
