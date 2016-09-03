/* eslint-env jquery */

class Game {
  constructor() {
    this.name = prompt('Player\'s name: ');
    this.cupsArray = [0, 1, 0];
    this.gameBoard = $('.gameboard');
    this.cupUl = $('<ul>').attr('class', 'cup-holder list-inline');

    $(this.gameBoard).append(this.cupUl);
    this.score = 0;
    $('#score').html(this.score);
    $('#name').html(this.name);
  }

  makeCups() {
    for (let id = 0; id < this.cupsArray.length; id++) {
      this.cupLi = $('<li>');
      this.cupLi.attr('id', `${id}`);
      this.cupImg = $('<img>').attr('src', './assets/img/cup.png').attr('class', 'cup img-responsive');
      this.ballImg = $('<img>').attr('src', './assets/img/ball.png').attr('class', 'ball');

      if (this.cupsArray[id] === 1) {
        $(this.cupImg).addClass('hasBall');
      } else {
        $(this.cupImg).removeClass('hasBall');
      }
      $(this.cupLi).append(this.cupImg);
      $(this.cupUl).append(this.cupLi);
    }

    $('.hasBall').after($(this.ballImg));
  }

  shuffleCups() {
    $('.hasBall').removeClass('hasBall');
    $('.ball').remove();
    for (let i = this.cupsArray.length - 1; i >= 0; i--) {
      let rndIdx = Math.floor(Math.random() * ( i + 1));
      let itemAtIdx = this.cupsArray[rndIdx];

      this.cupsArray[rndIdx] = this.cupsArray[i];
      this.cupsArray[i] = itemAtIdx;
    }

    console.log(this.cupsArray);
  }

  revealCup(cup) {
    $('.hasBall').removeClass('hasBall');
    $('.ball').remove();
    $(cup).addClass('hasBall');
    let liId = $(cup).parent().attr('id');
    if (this.cupsArray[liId] === 1) {
      $(cup).parent().append($(this.ballImg));
      this.score += 10;
      $('#score').html(this.score);
      // ADD NEW CUP
      // if (window.confirm('Add new cup?')) {
      //   this.cupsArray.push(0);
      //   $(this.cupUl).append(this.cupLi);
      // }
    } else {
      this.score = 0;
      $('#score').html(this.score);
    }
  }

  render() {
    this.makeCups();
  }
}
