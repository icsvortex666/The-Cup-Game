/* eslint-env jquery */

class GameView {
  constructor() {
  }

  revealCups() {
    $('img.cup').fadeIn('slow').show();
  }

  render() {
    const $newGame = new Game();
    $newGame.render();
    console.log('GameView works!');
  }
}

$('img.cup').hide();
