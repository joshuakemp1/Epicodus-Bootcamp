$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var person_1Input = $("input#person_1").val();
    var person_2Input = $("input#person_2").val();
    var animal_Input = $("input#animal").val();
    var exclamation_Input = $("input#exclamation").val();
    var verb_Input = $("input#verb").val();
    var noun_Input = $("input#noun").val();


    $('.person_1').text(person_1Input);
    $('.person_2').text(person_2Input);
    $('.animal').text(animal_Input);
    $('.exclamation').text(exclamation_Input);
    $('.verb').text(verb_Input);
    $('.noun').text(noun_Input);

    $('#story').show();

    event.preventDefault();
  });
});