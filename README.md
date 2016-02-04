phaser-template
===============

A simple template project for creating [Phaser](http://phaser.io) games, using Gulp and npm.

This provides a basic setup to get started on a game. Created from messing around with a few tutorials, and browsing through the [Phaser Project Templates](https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates).

It's not much to look at, but you can see what this code does on [kiswa.github.io](http://kiswa.github.io/phaser-template)

Getting Started
---------------

Clone the repository where you want, enter that directory, then run `npm install` to install the dependencies.

To build the `dist` output directory, run the `gulp` command. You may also run `gulp watch` in a terminal to update the ouput any time a file changes.

Notes
-----

This template assumes States are used. `Init` and `Loader` States are provided as an example (they also get an initial loading screen running which is easily customized).

`Init` sets some properties for the Phaser environment and preloads a webfont and images for the loading screen. `Loader` then loads the remaining assets for a game while using the previously loaded font and images to display a loading bar.

Additional states must have their JavaScript files included in `index.html` and their State added to `main.js`.

The template also encourages the use of objects within states. See the `js\objs\loadingBar.js` and `js\loader.js` for an example.
