// 'use strict'

// const Controller = require('trails-controller')

// /**
//  * @module TodoController
//  * @description Generated Trails.js Controller.
//  */
// module.exports = class TodoController extends Controller{
//   customAction(req, res) {
//     this.app.orm.Todo.find().then(todos => res.json(todos)).catch(err => res.status(500).end())
//   }
// }

'use strict'
// const util = require('util')
// const _ = require('lodash')
// const q = require('bluebird')

// const Model = require('trails-model')
const Controller = require('trails-controller')

/**
 * @module TodoController
 * @description Generated Trails.js Controller.
 */
// 


module.exports = class TodoController extends Controller {

  find(req, res) {
    //  console.log('find')
    this.app.orm.Todo.find().then(todos => res.json(todos)).catch(err => res.status(500).end())
  }
  customAction(req, res) {
    //  console.log('customAction--') 
    this.app.orm.Todo.find().then(todos => {
      //  console.log('todos ',todos)
      res.json({ data: todos })
    }
    ).catch(err => res.status(500).end())

  }
  findall(req, res) {
    //console.log('findall')
    this.app.orm.Todo.find().then(todos => res.json(todos)).catch(err => res.status(500).end())
  }


  getAllopen(req, res) {
    // method: [ 'get' ],  path: '/api/v1/todo',
    //  console.log(' getAllopen  '); // , model

    this.app.orm.Todo.find({ status: 'open' }).then(todos => res.json(todos)).catch(err => res.status(500).end())
  }


  customUpdate(req, res) {
    var id = req.param('id')
    var model = req.body
    //  console.log('id body  ', id, model)

    this.app.orm.Todo.update(id, model).then(todos => res.json(todos))
      .catch(err => res.status(500).end())
  }


  getAll(req, res) {
    //console.log('todo:getAll ')
    this.app.orm.Todo.getAll()
      .spread(function (models) {
        res.json({ data: models })
      })
      .catch(function (err) {
        res.json(err);
      })
  }

  getOne(req, res) {
    Todo.getOne(req.param('id'))
      .spread(function (model) {
        this.app.orm.Todo.subscribe(req.socket, model);
        //  console.log('User with socket id '+req.socket.id+' is now subscribed to all of the model instances in \'todos\'.');
        res.json(model)
      })
      .catch(function (err) {
        res.send(404)
      });
  }


  getclient(req, res) {
    var id = req.param('id')
    //console.log('getclient todos', id)

    this.app.orm.Todo.find({ user: id, status: 'open' }).exec(function (err, model) {
      if (err) {
        return res.negotiate(err)
      }
      return res.json({ data: model })
    })
  }
  create(req, res) {
    var userId = req.param('user')
    var model = {
      title: req.param('title'),
      status: req.param('status'),
      user: userId,
      open: req.param('open')
    }
    console.log('model ', model)
    // TODO: upon message creation, how to populate the user here, so the associated user gets sent back as a property of the message
    this.app.orm.Todo.create(model)
      .exec(function (err, model) {
      
        if (err) {
          return//  console.log(err);
        }
        else {
          res.json(model)
        }
      });
  }
  update(req, res, next) {

    var mongodid = req.param("mongodid")
    // console.log('update id', mongodid)
    this.app.orm.Todo.update(mongodid, { status: 'closed' }).exec(function update(err, updated) {
      res.json('success')
    })

  }
}

