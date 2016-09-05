/* eslint-env jquery */

class Game {
  constructor() {
    this.cupsArray = [0, 1, 0];
    this.score = 0;
    this.gameBoard = $('section').attr('class', 'gameboard');
    this.cupUl = $('<ul>').attr('class', 'cup-holder list-inline');
    $(this.gameBoard).append(this.cupUl);
    $('#score').html(this.score);
  }

  makeCups() {
    for (let id = 0; id < this.cupsArray.length; id++) {
      this.cupLi = $('<li>');
      $(this.cupLi).attr('id', `${id}`);
      this.cupImg = $('<img>');
      $(this.cupImg).attr('src', './assets/img/cup.png');
      $(this.cupImg).attr('class', 'cup img-responsive');
      this.ballImg = $('<img>');
      $(this.ballImg).attr('src', './assets/img/ball.png');
      $(this.ballImg).attr('class', 'ball');

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
      const rndIdx = Math.floor(Math.random() * (i + 1));
      const itemAtIdx = this.cupsArray[rndIdx];

      this.cupsArray[rndIdx] = this.cupsArray[i];
      this.cupsArray[i] = itemAtIdx;
    }

    console.log(`|${this.cupsArray}|`);
  }

  revealCup(cup) {
    $('.hasBall').removeClass('hasBall');
    $('.ball').remove();
    $(cup).addClass('hasBall');
    const liId = $(cup).parent().attr('id');
    if (this.cupsArray[liId] === 1) {
      $(cup).parent().append($(this.ballImg));
      this.score += 10;
      $('#score').html(this.score);
      // ADD ADDITIONAL CUP
      alert('Congratulations! You found the ball in the cup.');
      if (confirm('Would you like to add new cup?')) {
        this.cupLi = $('<li>');
        $(this.cupLi).attr('id', `${this.cupsArray.length}`);
        this.cupImg = $('<img>');
        $(this.cupImg).attr('src', './assets/img/cup.png');
        $(this.cupImg).attr('class', 'cup img-responsive');
        $(this.cupLi).append(this.cupImg);
        this.cupsArray.push(0);
        $(this.cupUl).append(this.cupLi);
        if (this.cupsArray[liId] === 1) {
          this.score += 15;
        }
      }
    } else {
      this.score = 0;
      alert('Oh Snap! You didn\'t find the ball!\nYou lost all your points!');
      $('#score').html(this.score);
    }
  }

  render() {
    this.makeCups();
  }
}
