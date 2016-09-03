/* eslint-env jquery */

const newApp = new App();

$('.btn-start').on('click', function(e) {
  e.preventDefault();
  newApp.render();
  $('.btn-shuffle').removeClass('hidden');
  this.remove();
});

$('.btn-shuffle').on('click', function(e) {
  e.preventDefault();
  newApp.newGameView.newGame.shuffleCups();
  $('.cup').bind('click', function() {
    newApp.newGameView.newGame.revealCup(this);
  });
});
