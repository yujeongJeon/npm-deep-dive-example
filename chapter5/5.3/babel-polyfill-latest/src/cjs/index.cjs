
const {asyncReduce} = require('../esm/asyncReduce')

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
    stringMatchAll,
    at,
    findLast
}