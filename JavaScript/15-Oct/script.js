//+++++++++++++++++++++++++++++++1++++++++++++++++++++++++

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddArrayFor(arr = []) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // console.log("in process:", arr[j]);
      if (arr[j] % 2 === 1) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

function oddArrayWhile(arr = []) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    while (arr[i] % 2 === 1) {
      arr.splice(i, 1);
    }
    i++;
  }

  return arr;
}

console.log(oddArrayFor(numbers));
console.log(oddArrayWhile(numbers));

//+++++++++++++++++++++++++++2+++++++++++++++++++++

let aveArr = [1, 2, 3, 4, 6, 7, 9];

function aveArrayFor(arr = []) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function aveArrayWhile(arr = []) {
  var sum = 0;
  var i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }

  return sum / arr.length;
}

console.log(aveArrayFor(aveArr));
console.log(aveArrayWhile(aveArr));

//+++++++++++++++++++++++++++3++++++++++++++++++++++

function factorial(n) {
  let fac = 1;
  if (n == 0 || n == 1) {
    return fac;
  } else {
    for (var i = n; i >= 1; i--) {
      fac = fac * i;
    }
  }
  return fac;
}

console.log(factorial(prompt("enter the number:")));
