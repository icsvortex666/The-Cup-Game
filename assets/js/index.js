/* eslint-env jquery */

function startGame() {
  const newApp = new App();
  newApp.render();
  this.remove();
}

$('button').on('click', startGame);
