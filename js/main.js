// variabili
var maxNumber = 100;

// ciclo
for (var i = 1; i <= maxNumber; i++) {
  var stamp = document.getElementById('box');
  if (i % 3 === 0 && i % 5 === 0) {
    stamp.innerHTML += 'FizzBuzz';
 }
  else if (i % 3 === 0) {
    stamp.innerHTML += 'Fizz';
 }
  else if (i % 5 === 0) {
    stamp.innerHTML += 'Buzz';
 }
  else {
    stamp.innerHTML += i;
 }
}
