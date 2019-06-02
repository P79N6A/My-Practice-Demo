// const log4js = require('log4js');

// // log4js.configure({
// //   appenders: {
// //     cheese: {
// //       type: 'file',
// //       filename: 'cheese.log',
// //     }
// //   },
// //   categories: {
// //     default: {
// //       appenders: ['cheese'],
// //       level: 'error',
// //     }
// //   }
// // });

// // const loggerTest = log4js.getLogger('cheese');
// const loggerTest = log4js.getLogger();

// // module.exports = {
// //   loggerTest,
// // }
// loggerTest.debug('test');

var log4js = require('log4js');

log4js.configure({
  appenders: {
    test: {
      type: 'file',
      filename: 'test.log'
    }
  },
  categories: {
    default: {
      appenders: ['test'],
      level: 'error',
    },
    ttt: {
      appenders: ['test'],
      level: 'debug',
    }
  }
});

var logger = log4js.getLogger('ttt');

logger.fatal("Time:", new Date());