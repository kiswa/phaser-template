var LoadingBar = function(game, parent, color) {
    Phaser.Group.call(this, game, parent);

    // Images loaded by MyGame.Init
    this.background = game.add.sprite(game.world.centerX, game.world.centerY, 'loadingBarBg');
    this.background.anchor.setTo(0.5, 0.5);
    this.add(this.background);

    // Left to right loading bar
    this.bar = game.add.sprite(game.world.centerX - 175, game.world.centerY - 16, 'loadingBar');
    // Center to outsides loading bar.
    //this.bar = game.add.sprite(game.world.centerX, game.world.centerY, 'loadingBar');
    //this.bar.anchor.setTo(0.5, 0.5);
    this.add(this.bar);
};

LoadingBar.prototype = Object.create(Phaser.Group.prototype);
LoadingBar.prototype.constructor = LoadingBar;
