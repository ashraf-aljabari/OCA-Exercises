var oddArr = [];
var evenArr = [];

for (var x = 0; ; x++) {
  if (x < 10) {
    var currentNum = prompt("enter the number");

    if (currentNum % 2 == 0) {
      evenArr.push(parseInt(currentNum));
    } else {
      oddArr.push(parseInt(currentNum));
    }
  }
  // console.log(oddArr);
  // console.log(evenArr);
  if (x == 10) {
    sum(oddArr, evenArr);
    break;
  }
}

function sum(odd = [], even = []) {
  let oddSum = 0,
    evenSum = 0;

  for (var x = 0; x < odd.length; x++) {
    oddSum += parseInt(odd[x]);
  }
  console.log("Odd Number: " + oddSum);
  for (var x = 0; x < even.length; x++) {
    evenSum += parseInt(even[x]);
  }
  console.log("Even Numbers: " + evenSum);
}
