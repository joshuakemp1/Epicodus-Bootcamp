$(document).ready(function() {
  $('#blanks form').submit(function(event) {

    var  blanks = ['person_1', 'person_2', 'animal', 'exclamation', 'verb', 'noun'];

    blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $('.' + blank).text(userInput);
    });
    // var person_1Input = $("input#person_1").val();
    // var person_2Input = $("input#person_2").val();
    // var animal_Input = $("input#animal").val();
    // var exclamation_Input = $("input#exclamation").val();
    // var verb_Input = $("input#verb").val();
    // var noun_Input = $("input#noun").val();

    // $('.person_1').text(person_1Input);
    // $('.person_2').text(person_2Input);
    // $('.animal').text(animal_Input);
    // $('.exclamation').text(exclamation_Input);
    // $('.verb').text(verb_Input);
    // $('.noun').text(noun_Input);

    $('#story').show();

    event.preventDefault();
  });
});