import Phaser from 'phaser';
import Level from './scenes/level';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: 0x222222,
  physics: {
    default: 'arcade',
  },
  scene: [Level],
};

const game = new Phaser.Game(config);
game();
