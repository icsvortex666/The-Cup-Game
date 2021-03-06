/* eslint-env jquery */

const newApp = new App();

$('.btn-start').on('click', function(e) {
  e.preventDefault();
  newApp.render();
  $('.btn-shuffle').removeClass('hidden');
  this.name = prompt('Player\'s name: ');
  $('#name').html(this.name);
  this.remove();
});

$('.btn-shuffle').on('click', function(e) {
  e.preventDefault();
  newApp.newGame.shuffleCups();
  $('.btn-shuffle').addClass('disabled');
  $('li img').effect('shake', { times: 15, distance: 100 }, 1500);
  $('.cup').bind('click', function(e) {
    e.preventDefault();
    newApp.newGame.revealCup(this);
    $('.btn-shuffle').removeClass('disabled');
    $('.cup').unbind('click');
  });
});
