const mathDoer = require('./math-doer');
import styles from '../scss/main.scss'
require('../views/index.pug')
// This require() statement has side effects.
require('./box-creator');

// mathDoer just does some math on 2 inputs.
const result = mathDoer(7, 3);

// Console.log statements are reprinted on every reload.
console.log('111Math result are equal to number 000000000:' + result);

if (module.hot) {
  module.hot.accept();
}
