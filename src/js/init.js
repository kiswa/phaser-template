// Global 'namespace' for the game.
var MyGame = {};

(function(MyGame, undefined) {
    'use strict';

    // Create the object for webfont.js to use.
    window.WebFontConfig = {
        active: function() {
            MyGame.Init.prototype.fontLoaded = true;
        },
        google: {
            families: ['Walter Turncoat']
        }
    };

    // This state loads the assets for the loading bar and sets
    // some options, then loads the game state that preloads game assets.
    MyGame.Init = function(game) {};

    MyGame.Init.prototype = {
        init: init,
        preload: preload,
        update: update,
        enterIncorrectOrientation: enterIncorrectOrientation,
        leaveIncorrectOrientation: leaveIncorrectOrientation
    };

    function init() {
        /* jshint validthis: true */
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
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }
        this.scale.refresh();
    }

    function preload() {
        /* jshint validthis: true */
        // Load the webfont script for custom fonts
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');

        // Load images for use in Loader state.
        this.load.image('loadingBar', 'assets/images/loading-bar.png');
        this.load.image('loadingBarBg', 'assets/images/loading-bar-bg.png');

        // Load object script for LoadingBar.
        this.load.script('loadingBarObj', 'js/objs/loadingBar.js');
    }

    function update() {
        /* jshint validthis: true */
        // Go straight to Loader state after font loads.
        if (this.fontLoaded) {
            this.state.start('Loader');
        }
    }

    function enterIncorrectOrientation() {
        MyGame.isOriented = false;
        // Show something to the user to have them re-orient.
    }

    function leaveIncorrectOrientation() {
        MyGame.isOriented = true;
        // Get back to the game!
    }
})(MyGame);
