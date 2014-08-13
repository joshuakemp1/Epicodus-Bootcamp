$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var question_askerInput = $("input#question_asker").val();

    $('.question_asker').text(question_askerInput);

    $('#uppercase').show();

    event.preventDefault();
  });
});