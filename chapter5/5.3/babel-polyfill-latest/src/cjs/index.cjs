const {asyncReduce} = require('../asyncReduce')

const {Cat} = require('../Cat')

function stringMatchAll(str, regexp) {
    return Array.from(str.matchAll(regexp))
}

function at(arr, index) {
    return arr.at(index)
}

function findLast(arr, callback) {
    return arr.findLast(callback)
}


module.exports = {
    asyncReduce,
    Cat,
    stringMatchAll,
    at,
    findLast,
}