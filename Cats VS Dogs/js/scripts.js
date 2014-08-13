$(document).ready(function() {
  $('img#c_img').click(function() {
    $('ul#cat').append("<li>Meow! <span class='clickable'>[ x ]</span></li>");
    $('ul#dog').append("<li>BARK! BARK! BARK! <span class='clickable'>[ x ]</span></li>");

    $('ul#cat').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#dog').children('li').last().click(function() {
      $(this).remove();
    });
  });


  $('#d_img').click(function() {
    $('ul#dog').append("<li>BARK! BARK! BARK! <span class='clickable'>[ x ] </span></li>");
    $('ul#cat').append("<li> Meow! <span class='clickable'>[ x ] </span></li>");

    $('ul#cat').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#dog').children('li').last().click(function() {
      $(this).remove();
    });
  });
  $('button#change').click(function() {
    $('body').removeClass();
    $('body').addClass("black_background");
  });

});