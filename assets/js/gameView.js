/* eslint-env jquery */

class GameView {
  constructor() {
    this.newGame = new Game();
  }

  render() {
    this.newGame.render();
  }
}
