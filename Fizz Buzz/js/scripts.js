jQuery(document).ready(function($) {
var number = prompt('How high would you like us to FizzBuzz to?');

for (var i = 1; i <= number; i++) {
  if (i % 15 === 0) {
    $('.inner').append('<li>FizzBuzz</li>');
  } else if (i % 5 === 0) {
    $('.inner').append('<li>Buzz</li>');
  } else if (i % 3 === 0) {
    $('.inner').append('<li>Fizz</li>');
  } else {
    $('.inner').append('<li>'+ i + '</li>');
  }
 }
});