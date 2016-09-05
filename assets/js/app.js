/* eslint-env jquery */

class App {
  constructor() {
    this.newGame = new Game();
  }

  render() {
    this.newGame.render();
  }
}
