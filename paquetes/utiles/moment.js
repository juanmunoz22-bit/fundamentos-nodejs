const moment = require('moment')

let ahora = moment();
console.log(ahora);
console.log(ahora.format('DD/MM/YYYY'));
console.log(ahora.startOf('day').fromNow());