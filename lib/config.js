const dotenv = require('dotenv')
const isTessel = require('./is-tessel')
const path = require('path')

dotenv.config({
  silent: true,
  path: path.join(__dirname, '../.env')
})

const config = {}

if (isTessel) {
  const Tessel = require('tessel-io')
  config.io = new Tessel()
}

Object.assign(config, {
  animationDuration: process.env.ANIMATION_DURATION,
  segments: process.env.PINS.split(',')
    .map((pin) => {
      return {
        pin,
        inverted: 'INVERTED' in process.env
      }
    })
})

module.exports = config
