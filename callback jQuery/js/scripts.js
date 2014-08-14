jQuery(document).ready(function() {

  var body_change = $("#body_black");

  jQuery("h1").hover(function() {
    alert("This is a header.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });

  $("li").click(function() {
    alert("This is an li.");
  });

  $("h2").click(function() {
    alert("This is an h2.");
  });
  $("h3").dblclick(function() {
    alert("This is an h3.");
  });
  $("h4").hover(function() {
    alert("This is an h4.");
  });
  $("p").click(function() {
    $("#showing").toggle(1000);
    $("#hidden").toggle(2000);
  });
});