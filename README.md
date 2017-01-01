# Christmas Lights

A custom Christmas light display using [`LightDisplay`](https://github.com/scottgonzalez/j5-light-display).

Currently configured to control just the light tunnel over the driveway. Randomly selects an animation at a specified interval.

## Config

The display is configured with environment variable. The following variables can be set:

* `ANIMATION_DURATION`: The duration that each animation will run for.
* `INVERTED`: When set, the pins will use `LOW` instead of `HIGH` to turn the segments on.
* `PINS`: Comma separated list of pins for the segments.

The animations that are used are defined in `/lib/random-animation.js`.

Supports any board that Johnny-Five supports with no IO plugin, plus Tessel 2. When a Tessel is used, it is automatically detected and `tessel-io` will be loaded.

## Development

Preset configurations are defined for quickly switching boards and testing in development vs. production. To load a new configuration, use `npm run set-env {board}-{environment}` where `board` is the name of the board (e.g., `tessel`) and `environment` is the name of the environment (e.g., `production`).

`npm run tessel` will run the script on a Tessel via LAN.

## Deployment

`npm run deploy` will load the `tessel-production` configuration and then push the script to a Tessel via LAN.
