'use strict'

const Service = require('trails/service')
const _ = require('lodash')
const rooms = require('primus-rooms')
const emitter = require('primus-emitter')
// const Primus = require('primus')// .io')
// let primus = new Primus(server);

module.exports = class WebSocketService extends Service {

 stringify(x) {
    console.log(Object.prototype.toString.call(x));
}

  // exports = class WebSocketService extends Service {
  /**
   * Authenticate the user for websocket connection from query param ?token=
   * @param req
   * @param authorized
   * @returns {*}
   * @private
   */
  
  _authorize(req, authorized) {

    const token = req.query.token
   console.log('_authorize(req, authorized token'  , token)
    if (!token) {
      return authorized(new Error('No auth token'))
    }

    const jwtConfig = this.app.config.passport.strategies.jwt
    const jwtOptions = _.clone(jwtConfig.tokenOptions)
//  console.log('jwtConfig=%s jwtOptions=%s'  , stringify(jwtConfig),stringify(jwtOptions))
   // console.log('jwtConfig=%s jwtOptions=%s'  , Object.prototype.toString.call(jwtConfig),Object.prototype.toString.call(jwtOptions))


    jwtOptions.algorithms = jwtOptions.algorithm
    delete jwtOptions.algorithm

    const jwtVerifier = jwtConfig.strategy.JwtVerifier
    console.log('jwtVerifier=%s '  , jwtVerifier)
    jwtVerifier(token, jwtConfig.options.secretOrKey, jwtOptions, (err, payload) => {
    
    jwtOptions.algorithms = jwtOptions.algorithm
      if (err) {
       console.log('err=%s'  , err)
        authorized(err)
      }
      else {
        req.user = payload.user
        console.log('payload.user=%s'  ,  payload.user)
        authorized()
      }
    })
  }
   
  init() {
    console.log('in serv init')
    this.app.sockets.use('rooms', rooms)
    this.app.sockets.use('emitter', emitter)
    this.app.sockets.authorize(this._authorize)
    // this.app.log.debug('received message:')
    // this.app.log.info('something')

    this.app.sockets.on('connection ', spark => {
      console.log('in WebSocketService connection')
      const user = spark.request.user // Retrieve connected user
      spark.join('user_' + user.id)
      spark.on('join', (room, fn) => {
        /*
        this.app.services.PermissionService.isUserAllowed(user, room, 'access').then(perm => {
          if (perm && perm.length > 0) {

          }
         }).catch(err => this.log.error(err))*/
        spark.join(room, fn)
      })
      spark.on('leave', (room, fn) => {
        spark.leave(room, fn)
      })

      spark.on('data', data => {

        //spark.room('user_' + user.id).write(data + ' ' + user.email)
        this.log.debug(spark.id, 'received message:', data, spark.rooms())
      })
    })
    this.app.sockets.on('disconnection', spark => {
      const user = spark.request
      if (spark) {
        spark.leave('user_' + user.id)
      }
    })
  }
}
