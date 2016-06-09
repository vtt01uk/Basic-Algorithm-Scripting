//Check if a string (first argument, str) ends with the given target string
//(second argument, target).
//
//Here are some helpful links:
//
//  String.substr()
//
function confirmEnding(str, target) {
  var strEnd = str.substr(-target.length);
  if (strEnd === target) {
    return true;
    } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');                               //true
confirmEnding('Connor', 'n');                                //false
confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification');                 //false
confirmEnding('He has to give me a new name', 'name');       //true
confirmEnding('He has to give me a new name', 'me');         //true
confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');       //false

