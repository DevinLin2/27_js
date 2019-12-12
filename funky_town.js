/*
David Wang and Devin Lin
SoftDev1 pd02
K#28 -- Electric Boogaloo
2019-12-11
*/

document.getElementById("fib").addEventListener("click", (event) => handle_click(event, fibonacci(12)));
document.getElementById("gcd").addEventListener("click", (event) => handle_click(event, gcd(6, 2)));
document.getElementById("randomStudent").addEventListener("click", (event) => handle_click(event, randomStudent()));


var fibonacci = function (n) {
    var answer = function (n) {
      if (n == 0) {
          return 0;
      }
      if (n == 1) {
          return 1;
      }
      return (answer(n - 1) + answer(n - 2));
    };
    var answer = answer(n);
    console.log(`The ${n}th Fibonacci number is ${answer}`);
    return answer;
};

var gcd = function (a, b) {
    var answer = function (a, b) {
      if (a == 0) return 0;
      if (a % b == 0) return b;
      return answer(b, a % b);
    };
    var answer = answer(a, b);
    console.log(`The GCD of ${a} and ${b} is ${answer}`);
    return answer;
};

var students = ["bob", "jane", "billy", "john", "alfred", "mike"];

var randomStudent = function () {
  var randStudent = students[parseInt(Math.random() * students.length)];
  console.log(randStudent);
  return randStudent;
};

var handle_click = function (event, answer) {
  var answer_display = document.createElement("p");
  answer_display.innerHTML = answer;
  event.target.insertAdjacentElement('afterend', answer_display);
};
