//Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.
//
//For the purpose of this exercise, you should capitalize connecting words
//like 'the' and 'of'.
//
//Here are some helpful links:
//
// String.split()
//
function titleCase(str) {
  word = str.toLowerCase().split(' ');
  //console.log(word);
  
  for(var i = 0; i < word.length; i++) {
    var letter = word[i].split('');
    //console.log(letter);
    letter[0] = letter[0].toUpperCase();          //capitalize the first letter
    word[i] = letter.join('');                    //join back all the letters
  }
  return word.join(' ');                          //join back all the words
}

titleCase("I'm a little tea pot");                //I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt");                     //Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");  //Here Is My Handle Here Is My Spout
