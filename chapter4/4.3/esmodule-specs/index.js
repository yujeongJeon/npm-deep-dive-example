// Case 1: default 이름을 사용하여 가져오기
import sum from './module.js'

import * as myModule from './sum.js'

console.log(sum(1, 2), myModule.sum(1, 2))