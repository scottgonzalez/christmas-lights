function randomAnimation (display) {
  const animations = [
    {
      name: 'blink'
    },
    {
      name: 'chase'
    },
    {
      name: 'chase',
      simultaneous: 3
    },
    {
      name: 'chase',
      simultaneous: display.segments.length - 1
    },
    {
      name: 'constant'
    },
    {
      name: 'sparkle'
    }
  ]

  return animations[Math.floor(Math.random() * animations.length)]
}

module.exports = randomAnimation
