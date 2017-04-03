'use strict'
var _ = require('lodash')
const Controller = require('trails-controller')
const util = require('util')

// const Model = require('trails-model')
// const bcrypt = require('bcrypt')
// const fetch = require('node-fetch')

/**
 * @module AlertController
 * @description Generated Trails.js Controller.
 */
module.exports =
  class UserController extends Controller {
    getAll (req, res) {
      this.app.orm.User.getAll()
        .spread(function (models) {
          res.json({ data: models })
        })
        .fail(function (err) {
          // An error occured
        })
    }

  

    getOne (req, res) {
      var uid = parseInt(req.param('id'))
      console.log('   uid........', uid)
      this.app.orm.User.find({ 'userid': uid }).exec(function (err, user) {
        console.log('   User.find.........', user) // [0])
        if (err) return res.negotiate(err)
        return res.json(user) // {'data':'data':})
      })
    }

 

    create (req, res) {
      //  console.log('user create ', req.params.all)
      var model = {
        username: req.param('username'),
        email: req.param('email'),
        first_name: req.param('first_name'),
        last_name: req.param('last_name'),
        role: req.param('role')
      }

      //  console.log('model ', model)
      this.app.orm.User.create(model)
        .exec(function (err, model) {
          if (err) {
            return //  console.log(err)
          } else {
            User.publishCreate(model.toJSON())
            res.json(model)
          }
        })
    }

    
    update (req, res) {
      // // user.email user.password user.lastName firstName valuetemp-template town-value user.Admin
      console.log(' update user ')
    
      let epassword = req.param('password')
      let id = req.param('id')
      let firstName = req.param('firstName')
      let lastName = req.param('lastName')
      let roles = req.param('roles')
      let email = req.param('email')
      let templates = req.param('templates')
      console.log(' pass epassword ', id, epassword, firstName, lastName, roles, templates)
     //
      let umodel = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        roles: roles,
        templates: templates
      }
   

      console.log(' updateclient........', id, umodel)

      this.app.orm.User.update(id, umodel).exec(function update (err, model) {
        if (err) {
          return //  console.log(err)
        } else {
          console.log('success ')
          res.json(model)
        }
      })
    }

    find (req, res) {
      console.log(' /Users.find.  Users.find.........')

      this.app.orm.User.find({ Is_deleted: 0 }).exec(function (err, users) {
        console.log('   Users.find.........', users[0])

        if (err) return res.negotiate(err)
        return res.json(users); // {'data':'data':})
      })
    }

}
