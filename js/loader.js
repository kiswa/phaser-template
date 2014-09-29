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
                font: '18px Arial',
                fill: '#80cde8'
            };

        // Images loaded by MyGame.Init
        this.loadingBarBg = this.add.sprite(this.world.centerX, this.world.centerY, 'loadingBarBg');
        this.loadingBarBg.anchor.setTo(0.5, 0.5);
        // Left to right loading bar
        this.loadingBar = this.add.sprite(this.world.centerX - 175, this.world.centerY - 16, 'loadingBar');
        // Center to outsides loading bar.
        //this.loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, 'loadingBar');
        //this.loadingBar.anchor.setTo(0.5, 0.5);
        this.loadingBar.tint = 0x80cde8; // Make your loading bar any color!
        this.load.setPreloadSprite(this.loadingBar);

        // Changing the fontStyle will require adjustment to the location here.
        this.loadingText = this.add.text(this.world.centerX, this.world.centerY-30, "Loading...", fontStyle);
        this.loadingText.anchor.setTo(0.5, 0.5);

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
        this.loadingBar.cropEnabled = false;
    },

    update: function() {
        // Make sure audio is decoded before moving on to the next state.
        //if (this.cache.isSoundDecoded('yourAudio') && this.ready === false) {
        //    this.ready = true;
        //    this.state.start('MainMenu');
        //}
    }
};
