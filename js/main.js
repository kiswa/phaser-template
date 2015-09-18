(function(MyGame, undefined) {
    'use strict';

    // Create the Phaser game instance.
    MyGame.game = new Phaser.Game(800, 600, Phaser.AUTO);

    // Set anything that needs to be accesible across states here.
    MyGame.isOriented = false;

    // Add states.
    MyGame.game.state.add('Init', MyGame.Init, true); // Auto start this state
    MyGame.game.state.add('Loader', MyGame.Loader);
    // Add additional states here.

})(MyGame);
