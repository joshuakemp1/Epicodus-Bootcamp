jQuery(document).ready(function() {
  jQuery("h1").hover(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });

  $("li").click(function() {
    alert("This is an li.");
  });

  $("h2").click(function(event) {
    alert("This is an h2.");
  });
});