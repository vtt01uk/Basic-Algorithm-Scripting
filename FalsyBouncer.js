//Remove all falsy values from an array.
//
//Falsy values in Javascript are false, null, 0, "", undefined and NaN.
//
//Here are some helpful links:
//
//  Boolean Objects
//
//  Array.prototype.filter()
//
function bouncer(arr) {
  //Don't show a false ID to this bouncer
  var filtered = arr.filter(unchecked);        //Use callback to determin boolean value
  return filtered;

  function unchecked(val) {                    //Callback function to determine boolean value
    return Boolean(val);
  }
}

bouncer([7, "ate", "", false, 9]);             //[7, "ate", 9]
bouncer(["a", "b", "c"]);                      //["a", "b", "c"]
bouncer([false, null, 0, NaNm undefined, ""]); //[]
bouncer([1, null, NaN, 2, undefined]);         //[1,2]

