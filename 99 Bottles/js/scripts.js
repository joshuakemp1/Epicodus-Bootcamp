var first_quote = [' Take one down and pass it around, '];
var second_quote = [' bottles of beer on the wall. '];
var third_quote = [' bottles of beer.'];
var last_quote = [' No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'];

alert(' 99 bottles of beer on the wall, 99 bottles of beer.');

for (var i = 98; i >= 1; --i) {
  alert(first_quote + i + second_quote + i + second_quote + i + third_quote);
}
alert(last_quote);


