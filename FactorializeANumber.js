#Return the factorial of the provided integer
#
#If the integer is represented with the letter n, a factorial is the product
#of all positive integers less than or equal to n.
#
#Factorials are often represented with the shorthand notation n!
#
#For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
#
#Here are some helpful links:
#
# Arithmetic Operators
#
function factorialize(num) {
  var val = 1;
  for (num = num; num > 1; num--){
    val = val * num;
    //console.log(val);
  }
  return val;
}

factorialize(5); //5*4*3*2*1 = 120
factorialize(10); //10*9*8*7*6*5*4*3*2*1 = 3,628,800
factorialize(20); //20*19*18*17*16*15*14*13*12*11*10*9*8*7*6*5*4*3*2*1 = 2432902008176640000
factorialize(0); //1
