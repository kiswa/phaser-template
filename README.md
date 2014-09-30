phaser-template
===============

A simple template project for a game using [Phaser](http://phaser.io).

This provides a basic setup to get started on a game. Created from messing around with a few tutorials, and browsing through the [Phaser Project Templates](https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates).

Notes
-----

This template assumes States are used. `Init` and `Loader` States are provided as an example (they also get an initial loading screen running which is easily customized).

`Init` sets some properties for the Phaser environment and preloads a webfont and images for the loading screen. `Loader` then loads the remaining assets for a game while using the previously loaded font and images to display a loading bar.

Additional states must have their JavaScript files included in `index.html` and their State added to `main.js`
