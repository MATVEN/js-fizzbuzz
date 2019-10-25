// variabili
var maxNumber = 100;
var stamp = document.getElementById('box')
// ciclo
for (var i = 1; i <= maxNumber; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    stamp.innertHTML += 'FizzBuzz';

 }
  else if (i % 3 === 0) {
    stamp.innertHTML +='Fizz';
 }
  else if (i % 5 === 0) {
    stamp.innertHTML +='Buzz';
 }
  else {
      stamp.innertHTML += i;
 }
}
