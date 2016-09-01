/* eslint-env jquery */

class GameView {
  constructor() {
  }

  revealCups() {
    $('img.cup').fadeIn('slow').show();
  }

  render() {
    const $newGame = new Game();
    $newGame.createCups();
    $newGame.render();
  }
}

$('img.cup').hide();
