//One of the simplest and most widely known ciphers is a Caesar cipher,
//also known as a shift cipher. In a shift cipher the meanings of the letters
//are shifted by some set amount.
//
//A common modern use is the ROT13 cipher, where the values of
//the letters are shifted by 13 places. Thus 'A' --> 'N', 'B' --> 'O'
//and so on.
//
//Write a function that takes a ROT13 encoded string as input and returns
//a decoded string.
//
//All letters will be uppercase. Do not transform any non-alphabetic
//character (i.e. spaces, punctuation), but do pass them on.
//
//Here are some helpful links:
//
//  String.prototype.charCodeAt()
//
//  String.fromCharCode()
//
function rot13(str) {

var decoded = [];                                       // empty array
var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];

for (var i = 0; i < str.length; i++) {
  var cipher = abc.indexOf(str[i]) + 13;               //rot13 cipher
  
  if(abc.indexOf(str[i]) == -1) {
    decoded.push(str[i]); 
  } else {
    decoded.push([abc[cipher]);
  } 
}
return decoded.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");                               //FREE CODE CAMP
rot13("SERR CVMMN!");                                  //FREE PIZZA!
rot13("SERR YBIR?");                                   //FREE LOVE?
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK"); //THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX
