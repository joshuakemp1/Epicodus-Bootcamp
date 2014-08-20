$(document).ready(function() {
  var ice_cream_flavors = ['Vanilla, ', 'Chocolate, ', 'Strawberry'];

  ice_cream_flavors.forEach(function(flavor) {
    $('body').click(function() {
    $('p#icecream').append(flavor);
    });
  });

});