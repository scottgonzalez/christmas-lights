#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const SECONDS = 1000
const MINUTES = 60 * SECONDS

const [board, env] = process.argv[2].split('-')
const config = {}

if (board === 'tessel') {
  config.pins = [
    'a2', 'a3', 'a4',
    'a6', 'a7', 'b2',
    // The outlet connected to b4 isn't working,
    // so the 7th segment is plugged into b7
    'b7', 'b5', 'b6'
  ]
} else {
  config.pins = [
    2, 3, 4,
    5, 6, 7,
    8, 9, 10
  ]
}

if (env === 'production') {
  Object.assign(config, {
    inverted: true,
    animationDuration: 2 * MINUTES
  })
} else {
  Object.assign(config, {
    animationDuration: 20 * SECONDS
  })
}

fs.writeFileSync(
  path.join(__dirname, '../.env'),
  Object.keys(config)
    .map((key) => {
      value = config[key]
      key = key.replace(/([A-Z])/g, '_$1').toUpperCase()

      return `${key}=${value}`
    })
    .join('\n')
)