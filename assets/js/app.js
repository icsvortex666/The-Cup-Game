/* eslint-env jquery */

class App {
  constructor() {
    $(this).$game;
    $(this).$gameView;
  }

  render() {
    const $newGameView = new GameView();
    $(this).$gameView = $newGameView;
    $newGameView.render();
    $newGameView.addCups();
    $newGameView.revealCups();
  }
}
