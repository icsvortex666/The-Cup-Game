/* eslint-env jquery */

class Game {
  constructor() {
    this.cupsArray = [0, 1, 0];
  }

  makeCups() {
    const $gameBoard = $('.gameboard');
    const $cupHolder = $('<ul>');
    $($cupHolder).attr('class', 'cup-holder list-inline');
    $($gameBoard).append($cupHolder);
    for (let id = 0; id < this.cupsArray.length; id++) {
      const $cupItem = $('<li>');
      const $cupImg = '<img src="./assets/img/cup.png">';
      $($cupHolder).append($($cupItem).attr('id', `${id}`).append($($cupImg).attr('class', 'cup img-responsive')));
    }
  }

  shuffleCups() {

  }

  render() {
    this.makeCups();
  }
}
