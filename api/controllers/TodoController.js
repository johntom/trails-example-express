'use strict'

const Controller = require('trails-controller')

/**
 * @module TodoController
 * @description Generated Trails.js Controller.
 */
module.exports = class TodoController extends Controller{
  customAction(req, res) {
    this.app.orm.Todo.find().then(todos => res.json(todos)).catch(err => res.status(500).end())
  }
}

