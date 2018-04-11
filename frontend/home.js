'use strict';

import welcome from './welcome';

import total from './calc';

const summ = total(3,3,3);
console.log(`The total summ is ${summ}`);

welcome(`webpack learning! ${summ}`);
