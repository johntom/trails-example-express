'use strict'
/* global describe, it */

const assert = require('assert')

describe('TodoController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['TodoController'])
  })
})
