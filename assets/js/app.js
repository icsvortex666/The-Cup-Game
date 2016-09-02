/* eslint-env jquery */

class App {
  constructor() {
    this.newGameView = new GameView();
  }

  render() {
    this.newGameView.render();
  }
}
