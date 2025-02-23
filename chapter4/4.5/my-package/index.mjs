export class X {
    getResult() {
        return 42
    }
}

export function run(x) {
    if (!(x instanceof X)) {
        throw new TypeError('Please pass an X for mjs!')
    }
    return x.getResult()
}