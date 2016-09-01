/* eslint-env jquery */

class GameView {
  constructor() {
  }

  createCups() {
    const cupHolder = $('ul.cup-holder');
    const newCupNode = $.parseHTML(`
      <li>
        <img src="./assets/img/cup.png" class="cup img-responsive">
      </li>
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
