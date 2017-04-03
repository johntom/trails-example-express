module.exports = function (app) {
   console.log('in bootstrap config')
     app.services.WebSocketService.init()

}