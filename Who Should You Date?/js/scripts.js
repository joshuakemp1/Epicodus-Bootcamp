$(document).ready(function() {
  $('#your_date').hide();
  $('form#dating').submit(function(event) {
    var age = parseInt($("input.age").val());
    var gender = $("select#gender").val();

    var person_1 = "Brad Pitt";
    var person_2 = "Megan Follows";
    var person_3 = "You are too young to date!";
    var person_4 = "You are too old to date!";
    var person = "";

    if (gender) {
      if (age > 30) {
        person = person_4;
      }
      else if (age <= 16) {
        person = person_3;
      }
      else if (gender === 'male') {
        person = person_2;
      }
      else if (gender === 'female') {
        person = person_1;
      } else {
        alert("Come on now, tell us your gender or else we won't be able find a good match!");
      }

      $('#person').empty().append(person);
      $("#your_date").show();

      }

     event.preventDefault();
  });
});


