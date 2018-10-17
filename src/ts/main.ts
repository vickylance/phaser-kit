import Phaser from "phaser";
import Images from "../../assets/*.png";

class PlayGame extends Phaser.Scene {
  constructor() {
    super({ key: "PlayGame" });
  }

  // tslint:disable-next-line:no-empty
  public init(data) {}

  public preload() {
    // load images
    this.load.image("ship", Images.ship);
  }

  public create(data) {
    // render the ship
    this.ship = this.add.sprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "ship"
    );
  }

  // tslint:disable-next-line:no-empty
  public update(time, delta) {}
}

window.onload = () => {
  const config: GameConfig = {
    height: 480,
    width: 320,
    zoom: 2,
    // tslint:disable-next-line:object-literal-sort-keys
    type: Phaser.AUTO,
    physics: {
      default: "arcade"
    },
    scene: [PlayGame]
  };
  const game = new Phaser.Game(config);
};

// This is for preventing re-run multiple scenes
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
