$(document).ready(function() {
  $("button#hello").click(function(){
    $("ul#user").append("<li>Hello! <span class='clickable delete'>[ x ]</span></li>");
    $("ul#webpage").append("<li>Well...HOwdy! <span class='clickable delete'>[ x ]</span></li>");

    $('ul#user').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#webpage').children('li').last().click(function() {
      $(this).remove();

    });
  });


  $("#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!<span class='clickable delete'>[ x ]</span></li>");
    $("ul#webpage").append("<li>Fine there..mister bossy!<span class='clickable delete'>[ x ]</span></li>");
    $('ul#user').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#webpage').children('li').last().click(function() {
      $(this).remove();
    });
  });


  $("#stop").click(function() {
    $("ul#user").append("<li> STOP! IT!!!!<span class='clickable delete'>[ x ]</span></li>");
    $("ul#webpage").append("<li>I'll stop if you don't yell!<span class='clickable delete'>[ x ]</span></li>");
    $('ul#user').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#webpage').children('li').last().click(function() {
      $(this).remove();
    });
  });



  $("#warning").click(function() {
    $("ul#user").append("<li> This is your FINAL warning!<span class='clickable delete'>[ x ]</span></li>");
    $("ul#webpage").append("<li>...Well now I'M warning YOU!<span class='clickable delete'>[ x ]</span></li>");
    $('ul#user').children("li").last().click(function() {
      $(this).remove();
    });
    $('ul#webpage').children('li').last().click(function() {
      $(this).remove();
    });
  });
});



