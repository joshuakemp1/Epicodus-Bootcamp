$(document).ready(function() {
  if (confirm("Do you want to see our programming laguage options? Click OK for yes or Cancel for no.")) {
    $('#javascript').show();
  } else {
    $('#no_show').show();
    $('#body_black').show();
  }
});