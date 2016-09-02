/* eslint-env jquery */

class GameView {
  constructor() {
    this.newGame = new Game();
  }

  revealCups() {
    $('img.cup').fadeIn('slow').show();
  }

  render() {
    this.newGame.render();
  }
}

$('img.cup').hide();
