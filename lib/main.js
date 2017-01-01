const config = require('./config')
const five = require('johnny-five')
const LightDisplay = require('light-display')(five)
const randomAnimation = require('./random-animation')

const board = new five.Board({
  io: config.io
})

board.on('ready', () => {
  const tunnel = new LightDisplay(config.segments)

  tunnel.start(randomAnimation(tunnel))
  setInterval(() => {
    tunnel.start(randomAnimation(tunnel))
  }, config.animationDuration)
})
