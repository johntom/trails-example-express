/**
 * Trailpack Configuration
 * (app.config.main)
 *
 * @see http://trailsjs.io/doc/config/main
 */

'use strict'

const path = require('path')

module.exports = {

  /**
   * Order does *not* matter. Each module is loaded according to its own
   * requirements.
   */
  packs: [
    require('trailpack-repl'),
    require('trailpack-router'),
    require('trailpack-express'),
    require('trailpack-waterline'),
    require('trailpack-passport'),
    require('trailpack-cron'),
    require('trailpack-footprints'),
    require('trailpack-realtime'),
    require('trailpack-bootstrap')
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: path.resolve(__dirname, '..'),
    temp: path.resolve(__dirname, '..', '.tmp')
  }
}