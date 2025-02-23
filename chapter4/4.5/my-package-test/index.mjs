import {run, X} from 'my-package'

import x1 from 'my-package-esm'
import x2 from 'my-package-cjs'

try {
    console.log('Running ES module plugin:')
    run(x1)
    console.log('Success')
} catch (exception) {
    console.error(exception)
}

try {
    console.log('Running CommonJS plugin:')
    run(x2)
    console.log('Success')
} catch (exception) {
    console.error(exception)
}
