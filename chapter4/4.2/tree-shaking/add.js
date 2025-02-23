const {maxBy} = require('lodash')

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    max: (arr) => maxBy(arr),
}

Object.keys(operations).forEach((fnName) => (module.exports[fnName] = operations[fnName]))
