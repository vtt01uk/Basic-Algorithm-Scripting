//Repeat a given string(first argument) num times (second argument).
//Return an empty string if num is not a positive number.
//
//Here are some helpful links:
//
//  Global String Object
//
function repeatStringNumTimes(str, num) {
  //repeat after me
  if (num > 0) {
    return str.repeat(sum);
  } else {
    return "";
  }
}

repeatStringNumTimes("*", 3);      // ***
repeatStringNumTimes("abc", 3);    // abcabcabc
repeatStringNumTimes("abc", 4);    // abcabcabcabc
repeatStringNumTimes("abc", 1);    // abc
repeatStringNumTimes("*", 8);      // ********
repeatStringNumTimes("abc", -2);   // ""
