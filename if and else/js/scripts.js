$(document).ready(function() {

  var p_lang = (prompt("Do you want to see our programming laguage options? Please type in 'yes' or 'no' ." ));


  $('body').addClass('body_black');
  $('#javascript').hide();
  $('.container-fluid h1').hide();
  $('.yell').hide();


  if (p_lang === 'yes') {
    $('#javascript').show();
  } else if (p_lang === 'no') {
    $('.yell').show();
  }
   else {
    alert('YO DUMMY!');
  }


});