// The 'namespace' for the game.
var MyGame = {
    // Set anything that needs to be accesible across states here.
    isOriented: false
};

// This state loads the assets for the loading bar and sets
// some options, then loads the game state that preloads game assets.
MyGame.Init = function(game) {
    game.state.add('Loader', MyGame.Loader);
    // Add additional states here.
};

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
        // Load images to be used in Loader state.
        this.load.image('loadingBar', 'assets/images/loading-bar.png');
        this.load.image('loadingBarBg', 'assets/images/loading-bar-bg.png');
    },

    create: function() {
        // Go straight to Loader state.
        this.state.start('Loader');
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
