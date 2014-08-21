// var friends = ['Peter', 'John', 'Arvin'];

// for (var i = 0; i < friends.length; i++) {
//   alert('Hello...' + friends[i]);
// }



jQuery(document).ready(function() {
  var ice_creams = ['Vanilla', 'Chocolate', 'Strawberry'];

  $('body').click(function() {

    ice_creams.forEach(function(ice_cream) {
    $('p').append(ice_cream).add('li').addClass('p_color');
    });
  });
});