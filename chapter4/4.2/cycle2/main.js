const a = require('./a')
const b = require('./b')
// const b = require('./b')
// const a = require('./a')

const result = {
    a: a.b.loaded,
    b: b.a.loaded,
}

console.log(result)
