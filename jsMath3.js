/*
 Create a function that takes numbers b and m as arguments and
returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
with respect to x evaluated at x=m, where b and m are constants.
*/
function takeNum(b, m) {
  return b * (b - 1) * Math.pow(m, b - 2) + Math.exp(b * m);
}

let result =takeNum(2,2);
console.log(result);