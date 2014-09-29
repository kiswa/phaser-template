// Load or create the 'namespace' for the game.
var MyGame = MyGame || {},
    // Create the object for webfont.js to use.
    WebFontConfig = {
        active: function() {
            MyGame.Init.prototype.fontLoaded = true;
        },
        google: {
            families: ['Walter Turncoat']
        }
    };

// This state loads the assets for the loading bar and sets
// some options, then loads the game state that preloads game assets.
MyGame.Init = function() {};

MyGame.Init.prototype = {
    init: function() {
        // Set to single pointer input.
        this.input.maxPointers = 1;
        // Uncomment to disable automatic pause when game loses focus.
        //this.stage.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(400, 300, 800, 600); // Adjust to your game dimensions
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        if (!this.game.device.desktop) {
            this.scale.forceOrientation(true, false); // Landscape
            //this.scale.forceOrientation(false, true); // Portrait
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation(this.leaveIncorrectOrientation, this);
        }
        this.scale.setScreenSize(true);
        this.scale.refresh();
    },

    preload: function() {
        // Load the webfont script for custom fonts
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        // Load images for use in Loader state.
        this.load.image('loadingBar', 'assets/images/loading-bar.png');
        this.load.image('loadingBarBg', 'assets/images/loading-bar-bg.png');
    },

    update: function() {
        // Go straight to Loader state.
        if (this.fontLoaded) {
            this.state.start('Loader');
        }
    },

    enterIncorrectOrientation: function () {
        MyGame.isOriented = false;
        // Show something to the user to have them re-orient.
    },

    leaveIncorrectOrientation: function () {
        MyGame.isOriented = true;
        // Get back to the game!
    }
};
