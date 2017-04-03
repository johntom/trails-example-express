module.exports = function (app) {
   console.log('in bootstrap config')
  app.services.WebSocketService.init()
  // app.sockets.on('connection', spark => {
  //   console.log('Connected', spark.id)
    
  // })
}