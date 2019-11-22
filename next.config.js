require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    SOME_KEY: process.env.SOME_KEY
  }
}
