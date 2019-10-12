var util = require('util');

const a =util.isArray([])
// true
const b=util.isArray(new Array)
// true
const  c=util.isArray({})
// false
console.info(a);
console.info(b);
console.info(c);
