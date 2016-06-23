var vowels = ["a", "e", "i", "o", "u", "y"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
var input = "apple"
var piglatin = function(wordinput) {
  var firstLet = wordinput.charAt(0)
for (var i=0; i <= vowels.length; i += 1); {
    var letter = vowels[i];
    if (letter === vowels) {
      return (input + "ay");

    }
  }
};

console.log(input);


// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var word = $("input#word").val();
//     console.log(word);
//   });
// });
