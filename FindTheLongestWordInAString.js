//Return the length of the longest word in the provided sentence
//
//Your response should be a number.
//
//Here are some helpful links:
//
// String.split()
//
// String.length
//
function findLongestWord(str) {
  var LongestWordLength = 0;

  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > LongestWordLength) {
      LongestWordLength = str[i].length;
      //console.log(LongestWordLength);
    }
  } 
  return LongestWordLength; 
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
findLongestWord("May the force be with you"); //5
findLongestWord("Google do a barrel roll"); //6
findLongestWord("What is the average airspeed velocity of an unladen swallow"); //8
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //19
