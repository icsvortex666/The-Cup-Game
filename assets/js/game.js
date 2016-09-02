/* eslint-env jquery */

class Game {
  constructor() {
    this.cupsArray = [0, 1];
    this.cupHolder = $('ul.cup-holder');
    this.cupNode = `<li>
                          <a href="#">
                            <img src="./assets/img/cup.png" class="cup img-responsive">
                          </a>
                        </li>`;
  }

  createCups() {
    $.each(this.cupsArray, (idx, val) => {
      $(this.cupNode).prependTo(this.cupHolder);
    });
  }

  insertCup() {

  }

  shuffleCups() {

  }

  render() {
    this.createCups();
  }
}
