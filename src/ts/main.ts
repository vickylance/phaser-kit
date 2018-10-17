import Images from "../../assets/*.png";
import { Scene, Game, GameObjects } from 'phaser';

class PlayGame extends Scene {
  constructor() {
    super({ key: "PlayGame" });
  }

  init(data) {
  }

  preload() {
    // load images
    this.load.image("ship", Images["ship"]);
  }

  create(data) {
    // render the ship
    this.ship = this.add.sprite(this.game.config.width/2, this.game.config.height/2, "ship");
  }

  update(time, delta) {
  }
}

window.onload = function() {
  const config: GameConfig = {
    width: 320,
    height: 480,
    zoom: 2,
    type: Phaser.AUTO,
    physics: {
      default: 'arcade'
    }
    scene: [PlayGame]
  };
  new Game(config);
};

// This is for preventing re-run multiple scenes
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
