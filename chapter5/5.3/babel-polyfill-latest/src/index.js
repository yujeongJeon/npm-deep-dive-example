
export {default as asyncReduce} from './asyncReduce'

export function stringMatchAll(str, regexp) {
    return Array.from(str.matchAll(regexp))
}

export function at(arr, index) {
    return arr.at(index)
}

export function findLast(arr, callback) {
    return arr.findLast(callback)
}
