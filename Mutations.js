//Return true if the string in the first element of the array contains
//all of the letters of the string in the second element of the array.
//
//For example, ["hello", "hello"], should return true because all of
//the letters in the second string are present in the first, ignoring case.
//
//The arguments ["hello", "hey"] should return false because the string
//"hello" does not contain a 'y'.
//
//Lastly, ["Alien", "line"], should return true because all of the letters
// in "line" are present in "Alien".
//
//Here are some helpful links:
//
//  String.prototype.indexOf()
//
function mutation(arr) {
  var part1 = arr[0].toLowerCase();              //convert each part of the array
  var part2 = arr[1].toLowerCase();              //so they are equal
  //console.log(part1);
  //console.log(part2);

  var counter = 0;

  for (var i = 0; i < part2.length; i++) {       //Note that '0' doesn't evaluate to true
  //console.log(part2[i];                        //and '-1' doesn't evaluate to false
                                                 //iterate through each letter of part2
    if (part1.indexOf(part2[i] !== -1) {
      counter += 0;
    } else {
      counter += 1;
    }
  }

    if (counter === 0) {
      return true;
    } else {
      return false;
  }
  //console.log(count);
}

mutation(["hello", "hey"]);                       //false
mutation(["hello", "Hello"]);                     //true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);//true
mutation(["Mary", "Army"]);                       //true
mutation(["Mary", "Aarmy"]);                      //true
mutation(["Alien", "line"]);                      //true
mutation(["floor", "for"]);                       //true
mutation(["hello", "neo"]);                       //false
mutation(["voodoo", "no"]);                       //false  
