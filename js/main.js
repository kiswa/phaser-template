(function() {
    "use strict";

    // Load or create the 'namespace' for the game.
    var MyGame = window.MyGame || {};

    // Create the Phaser game instance.
    MyGame.game = new Phaser.Game(800, 600, Phaser.AUTO);

    // Set anything that needs to be accesible across states here.
    MyGame.isOriented = false;

    // Add states.
    MyGame.game.state.add('Init', MyGame.Init);
    MyGame.game.state.add('Loader', MyGame.Loader);
    // Add additional states here.

    // Start the first state.
    MyGame.game.state.start('Init');
    window.MyGame = MyGame;
})();
