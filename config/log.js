/**
 * Logging Configuration
 * (app.config.log)
 *
 * @see http://trailsjs.io/doc/config/log
 */

'use strict'

const winston = require('winston')

module.exports = {
  /**
   * Specify the logger to use.
   * @see https://github.com/winstonjs/winston#instantiating-your-own-logger
   *
   * Exposed on app.log
   */
  // { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
  logger: new winston.Logger({
    level: 'info', // shows only info
    //level: 'debug', // shows both info and debug
    exitOnError: false,
    transports: [
      new (winston.transports.Console)({
        prettyPrint: true,
        colorize: true
      }),
      // new (winston.transports.File)({ filename: 'logs/all-logs.log' })
        new (winston.transports.File)({ filename: 'logs/info.log' }) 

    ]
  })

}
