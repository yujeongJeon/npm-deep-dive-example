const data1 = require('./data')

console.log(require.cache[require.resolve('./data.js')])

delete require.cache[require.resolve('./data.js')]

const data2 = require('./data')

console.log(data1, data2)