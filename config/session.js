'use strict'
const SECRET = process.env.TOKEN_SECRET || 'mysupersecuretoken'

module.exports = {
  /**
   * Secret use by express for his session
   */
  secret: SECRET
}
