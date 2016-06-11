//Truncate a string (first argument) if it is longer than the given maximum
//string length (second argument). Return the truncated string with a ... 
//ending.
//
//Note that inserting the three dots to the end will add to the string length.
//
//However, if the given maximum string length num is less than or equal to 3,
//then the addition of the three dots does not add to the string length in 
//determining the truncated string.
//
//Here are some helpful links:
//
//  String.slice()
//
function truncateString(str, num) {
  //Clear out that junk in your trunk
  if (str.length <= num) {
    return str;                                //code 3.
  } else if (num <= 2) {
    return str.slice(0, num) + "...";          //code 1.
  } else {
    return str.slice(0, num-3) + "...";        //code 2.
  }
}

//Using code 2.
truncateString("A-tisket a tasket A green and yellow basket", 11);     //A-tisket ...

truncateString("Peter Piper picked a peck of pickled peppers", 14);    //Peter Piper...

//Using code 3.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);                                             //A-tisket a-tasket A green and yellow basket

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);                                                 //A-tisket a-tasket A green and yellow basket

//Using code 1.
truncateString("A-", 1);                                               //A...

truncateString("Absolutely Longer", 2);                                //Ab...

