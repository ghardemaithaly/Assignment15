/*2). The right shift operation is similar to floor division by powers of
two. Write a function that mimics (without the use of >>) the right
shift operator and returns the result from the two given integers. Try
to solve this challenge by recursion.
*/
function rightShift(num, shift) {
  if (shift === 0) return num;
  return rightShift(Math.floor(num / 2), shift - 1);
}
let result = rightShift(15,2);
console.log(result);