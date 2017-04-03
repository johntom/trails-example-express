/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

/**
 * Constrain the DefaultController.info handler to accept only GET requests.
 */
  {
    method: ['GET'],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }, {
    method: 'OPTIONS',
    path: '*',
    handler: 'DefaultController.options'
  }, {
    method: ['get'],
    path: '/api/v1/todo',
    handler: 'TodoController.customAction'
  }
]
