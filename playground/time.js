// Jan 1st 1970 00:00:00 am UTC
//
// new Date().getTime()

var moment = require('moment');

var date = moment();

// date.add(100, 'year').subtract(9, 'months');


// 6:01 am
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
