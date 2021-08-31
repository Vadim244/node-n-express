const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _flattenDeep(items)
console.log(newItems)