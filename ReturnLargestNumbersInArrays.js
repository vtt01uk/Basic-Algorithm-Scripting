//Return an array consisting of the largest number from each provided sub-array.
//
//For simplicity, the provided array will contain exactly 4 sub-arrays.
//
//Remember, you can iterate through an array with a simple for loop, and
//access each member with array syntax arr[i].
//
//Here are some helpful links:
//
//  Comparison Operators
//
function largestOfFour(arr) {
  //You can do this!

  var topVal = 0;
  var topArr = [];

  for (var i = 0; i < arr.length; i++ {
    for (var j = 0; j < arr[i].length; j++) {           //iterate through each array
      if ( topVal < arr[i][j]) {
      topVal = arr[i][j];                               //is value more than topVal? if so, set it!
      }
    }
    topArr.push(topVal);                                //push value into topArr array
    topVal = 0;                                         //reset
  }
  return topArr;
}

largestOfFour([{4,5,1,3}, [13,27,18,26], [32,35,37,39], [1000,1001,857,1]]); //[5,27,39,1001]

largestOfFour([[13,27,18,26], [4,5,1,3], [32,35,37,39], [1000,1001,857,1]]); //[27,5,39,1001]

largestOfFour([[4,9,1,3], [13,35,18,26], [32,35,97,39], [1000000,1001,857,1]]); //[9,35,97,1000000]
