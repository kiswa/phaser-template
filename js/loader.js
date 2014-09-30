// Load or create the 'namespace' for the game.
var MyGame = MyGame || {};

// This state loads all the game assets while displaying
// "Loading..." text and a loading bar to show progress.
MyGame.Loader = function(game) {
    this.ready = false;
};

MyGame.Loader.prototype = {
    preload: function() {
        var fontStyle = {
                font: '18px Walter Turncoat',
                fill: '#7edcfc'
            };

        // A somewhat contrived example of using objects.
        this.loadingBar = new LoadingBar(this.game);
        this.load.setPreloadSprite(this.loadingBar.bar);

        // Changing the fontStyle will require adjustment to the location here.
        this.loadingText = this.add.text(this.world.centerX, this.world.centerY-30, "Loading...", fontStyle);
        this.loadingText.anchor.setTo(0.5, 0.5);

        // Make your loading bar any color!
        this.loadingBar.background.tint = 0x7edcfc;
        this.loadingBar.bar.tint = 0xdcfc7e;

        // Load assets here.

        // DELETE --
        // Just to show that the loading bar works.
        var i = 2500;
        while (i--) {
            this.load.image('image' + i, 'assets/images/loading-bar.png');
        };
        // -- DELETE
    },

    create: function() {
        this.loadingBar.bar.cropEnabled = false;
    },

    update: function() {
        // Make sure audio is decoded before moving on to the next state.
        //if (this.cache.isSoundDecoded('yourAudio') && this.ready === false) {
        //    this.ready = true;
        //    this.state.start('MainMenu');
        //}
    }
};
