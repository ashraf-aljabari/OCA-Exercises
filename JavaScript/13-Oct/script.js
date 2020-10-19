//Task 8 part 1
//+++++++++++++++++++++++++++++++1+++++++++++++++++++++++++++++++++++
var numberOne = prompt("Enter the first number:");
var numberTwo = prompt("Enter the second number:");

if (numberOne > numberTwo) {
  alert("This number is larger: " + numberOne);
} else {
  alert("This number is larger: " + numberTwo);
}

//+++++++++++++++++++++++++++++++2+++++++++++++++++++++++++++++++++++

var numbers = [3, -7, 2];

for (var x = 0; x < numbers.length; x++) {
  if (numbers[x] < 0) {
    alert("The sign is -");
    break;
  }
}

//+++++++++++++++++++++++++++++++3+++++++++++++++++++++++++++++++++++

var sortting = [0, -1, 4];
var temp = [];

//using function
var sorttedArray;
sortting.sort((a, b) => b - a);
alert(sortting);

//using nested loop to solve it.
for (var i = 0; i < sortting.length; i++) {
  for (var j = 0; j < sortting.length; j++) {
    if (sortting[j] < sortting[j + 1]) {
      temp = sortting[j];
      sortting[j] = sortting[j + 1];
      sortting[j + 1] = temp;
    }
  }
}
alert(sortting);

//+++++++++++++++++++++++++++++++4+++++++++++++++++++++++++++++++++++

var maxNumberArr = [-5, -2, -6, 0, -1, 10, 98, 100];
var largestNumber = 0;

//using function
alert(Math.max(...maxNumberArr));

//using loop
for (i = 0; i < maxNumberArr.length; i++) {
  if (maxNumberArr[i] > largestNumber) {
    largestNumber = maxNumberArr[i];
  }
}

alert(largestNumber);

//+++++++++++++++++++++++++++++++5+++++++++++++++++++++++++++++++++++
var x = 0,
  y = 0;

x = prompt("Please enter the value of X:");
y = prompt("Please enter the value of Y:");

if (x > y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}

// task 8 part 2
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var math = 0,
  english = 0,
  arabic = 0,
  bio = 0,
  computer = 0,
  religion = 0,
  sum = 0,
  avg = 0;
const numberOfSub = 6;

var studentName = prompt("Please enter your name:");

math = prompt("Please enter your math:");
if (math >= 0 && math <= 100) {
  sum += parseInt(math);
} else {
  alert("you entered wrong mark for math subject!");
}

english = prompt("Please enter your english:");
if (english >= 0 && english <= 100) {
  sum += parseInt(english);
} else {
  alert("you entered wrong mark for english subject!");
}

arabic = prompt("Please enter your arabic:");
if (arabic >= 0 && arabic <= 100) {
  sum += parseInt(arabic);
} else {
  alert("you entered wrong mark for arabic subject!");
}

bio = prompt("Please enter your bio:");
if (bio >= 0 && bio <= 100) {
  sum += parseInt(bio);
} else {
  alert("you entered wrong mark for bio subject!");
}

computer = prompt("Please enter your computer:");
if (computer >= 0 && computer <= 100) {
  sum += parseInt(computer);
} else {
  alert("you entered wrong mark for computer subject!");
}

religion = prompt("Please enter your religion:");
if (religion >= 0 && religion <= 100) {
  sum += parseInt(religion);
} else {
  alert("you entered wrong mark for religion subject!");
}

if (
  math >= 0 &&
  math <= 100 &&
  english >= 0 &&
  english <= 100 &&
  arabic >= 0 &&
  arabic <= 100 &&
  bio >= 0 &&
  bio <= 100 &&
  computer >= 0 &&
  computer <= 100 &&
  religion >= 0 &&
  religion <= 100
) {
  avg = sum / numberOfSub;

  alert(studentName + ", your average is " + avg);

  if (avg >= 50 && avg < 60) {
    alert("Pass");
  } else if (avg > 60 && avg < 70) {
    alert("Average");
  } else if (avg > 70 && avg < 80) {
    alert("Good");
  } else if (avg > 80 && avg < 90) {
    alert("Very Good");
  } else if (avg > 90 && avg <= 100) {
    alert("Excellent");
  } else {
    alert("Something went wrong please refresh the page and try again :)");
  }
} else {
  alert("Please refresh the page you entered something wrong :D!");
}

//+++++++++++++++++++++++++++END OF TASK++++++++++++++++++++++++++++++++
