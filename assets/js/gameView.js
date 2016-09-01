/* eslint-env jquery */

class GameView {
  constructor() {
  }

  addCups() {
    const cupHolder = $('ul.cup-holder');
    const $cupId = 1;
    const newCupNode = $.parseHTML(`
      <li id="${$cupId}"><img src="./assets/img/cup.png" class="cup img-responsive"></li>
    `);
    $(newCupNode).prependTo(cupHolder);
  }

  revealCups() {
    $('img.cup').fadeIn('slow').show();
  }

  render() {
    const $newGame = new Game();
    $newGame.render();
  }
}

$('img.cup').hide();
