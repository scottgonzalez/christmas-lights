let isTessel = false

try {
  isTessel = !!require('tessel')
} catch (error) {}

module.exports = isTessel
