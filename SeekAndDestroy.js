//You will be provided with an initial array (the first argument in the
//destroyer function), followed by one or more arguments. Remove all
//elements from the initial array that are of the same value as these
//arguments.
//
//Here are some helpful links:
//
//  Arguments object
//
//  Array.prototype.filter()
//
function destroyer(arr) {
  //Remove all the values
  var args = Array.prototype.slice.call(arguments);     //The arguments object is not an array.
                                                        //It gets converted to a real array.
  //return args;
  args.splice(0, 1);                                    //We don't need the first argument..
  //return args;

  return arr.filter(determine);                         //Use filter() callback function

  function determine(element) {
    return args.indexOf(element) === -1;                //Finds if an element exists in arr
                                                        //that matches any args values before
                                                        //being sent back 'up' for filtering
  }
}

destroyer([1, 2, 3, 4, 1, 2, 3], 2, 3);                 //[1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);                 //[1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);                    //[1]
destroyer([2, 3, 2, 3], 2, 3);                          //[]
destroyer(["tree", "hamburger", 53], "tree", 53);       //["hamburger"]

