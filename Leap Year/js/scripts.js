var leapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  }
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

jQuery(document).ready(function($) {
  $("form#leap_year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (result) {
      $(".not").hide();
    } else {
      $(".not").show();
    }

    $("#result").show();
    event.preventDefault();
  });
});


// var leapYear = function(year) {
//   if (!(year % 400) || !(year % 4) && (year % 100)) {
//     return true;
//   }
//   return false;
// };

// jQuery(document).ready(function($) {
//   $("form#leap_year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var isLeapYear = leapYear(year);

//     $('#result').html('<p><span class="year">'+year+'</span> is' + (isLeapYear ? '' : ' not') + ' a leap year.</p>');
//     event.preventDefault();
//   });
// });