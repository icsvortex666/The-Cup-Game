/* eslint-env jquery */

$('button').on('click', function(e) {
  e.preventDefault();
  const newApp = new App();
  newApp.render();
  this.remove();
});
