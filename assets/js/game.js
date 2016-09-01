/* eslint-env jquery */

class Game {
  constructor() {
    $(this).wins = 0;
  }

  createCups() {
    const $cupsArray = [0, 1, 2];
    const cupHolder = $('ul.cup-holder');
    const newCupNode = `
                        <li>
                          <a href="#">
                            <img src="./assets/img/cup.png" class="cup img-responsive">
                          </a>
                        </li>`;
    $.each($cupsArray, (idx, val) => {
      $(newCupNode).prependTo(cupHolder);
    });
  }

  render() {
  }
}
