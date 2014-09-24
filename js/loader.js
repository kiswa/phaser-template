// This state loads all the game assets while displaying
// "Loading..." text and a loading bar to show progress.
MyGame.Loader = function() {};

MyGame.Loader.prototype = {
    preload: function() {
        var fontStyle = {
                font: '18px Arial',
                fill: '#80cde8'
            },
            lbCenter = {
                x: (this.game.width / 2) - 175, // Game center minus half loading bar width
                y: (this.game.height / 2) - 16 // Game center minus half loading bar height
            };

        // Images loaded by MyGame.Init
        this.add.sprite(lbCenter.x, lbCenter.y, 'loadingBarBg');
        this.loadingBar = this.add.sprite(lbCenter.x, lbCenter.y, 'loadingBar');
        this.loadingBar.tint = 0x80cde8; // Make your loading bar any color!
        this.load.setPreloadSprite(this.loadingBar);

        // Changing the fontStyle will require adjustments to the location here.
        this.add.text(lbCenter.x + 140, lbCenter.y - 25, "Loading...", fontStyle);

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
        // Go straight to next game state (MainMenu, Play, etc.).
        // this.state.start('NextState');
    }
};
