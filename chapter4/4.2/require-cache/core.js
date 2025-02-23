const assert = require('node:assert')
const realFs = require('node:fs')

const fakeFs = {}
require.cache.fs = {exports: fakeFs}

assert.strictEqual(require('fs'), fakeFs)
assert.strictEqual(require('node:fs'), realFs)
