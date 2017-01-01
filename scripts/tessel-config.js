#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  path.join(__dirname, '../.tesselignore'),
  fs.readFileSync(path.join(__dirname, '../.gitignore'), 'utf-8')
    .split('\n')
    .filter((filepath) => {
      return ![
        '/.env',
        '/node_modules/'
      ].includes(filepath)
    })
    .concat([
      '/scripts/'
    ])
    .join('\n')
)
