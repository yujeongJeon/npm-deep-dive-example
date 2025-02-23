'use strict'

Object.defineProperty(exports, '__esModule', {value: true})
exports.run = run
exports.X = void 0

class X {
    getResult() {
        return 42
    }
}

exports.X = X

function run(x) {
    if (!(x instanceof X)) {
        throw new TypeError('Please pass an X for cjs!')
    }
    return x.getResult()
}
