import { v as value } from '../generated-dep.js';

console.log('main2', value);

import('../generated-dynamic.js').then(result => console.log(result));
import('../external.js').then(result => console.log(result));
