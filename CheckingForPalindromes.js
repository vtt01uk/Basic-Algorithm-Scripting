#Return true if the given string is a palindrome.
#Otherwise, return false.
#
#A palindrome is a word or sentence that's spelled
#the same way both forward and backward, ignoring
#punctuation, case, and spacing.
#
#Here are some useful links:
#
#String.replace()
#
#String.toLowerCase()
#
function palindrome(str){

  var strStripped = str.toLowerCase().replace(/\W|_/g, '');
  //console.log(strStripped);
  var reversedStr = strStripped.split('').reverse().join('');
  //console.log(reversedStr);
  
  if (strStripped === reversedStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("never odd or even"); //true
palindrome("nope"); //false
palindrome("almostomla"); //false
palindrome("My age is 0, 0 si ega ym"); //true
palindrome("1 eye for of 1 eye"); //false
palindrome("0_0 (: /-\ :) 0-0"); //false
