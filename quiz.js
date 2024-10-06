// DOM Elements
score = document.querySelector(".right-answered");
let questionNumber = 0;
allButtons = document.querySelectorAll("button");
message = document.querySelector(".comment");
question = document.querySelector(".question p");
rightAnswer = allButtons[0];
wrongAnswer = allButtons[1];
nextQuestion = allButtons[3];
buttons = [rightAnswer, wrongAnswer, nextQuestion];
// Data: Questions, feedback messages, and answers
questions = [
  "JavaScript was invented in 1995",
  "Strings in JS are editable values",
  "1 + 1 === 2",
  "'1' + '1' === '11'",
  "typeof ['J', 'S'] === 'array'",
  "let declares a block-scoped variable",
  "NaN stands for 'Not a Number'",
  "An empty array is truthy in JS",
  "Arrays in JavaScript can hold multiple data types",
  "JavaScript is case-sensitive",
  "'===' checks both value and type",
  "The 'var' keyword is block-scoped",
  "'null' is an object in JavaScript",
  "JavaScript is single-threaded",
  "Arrow functions don't have their own 'this'",
  "'typeof null' returns 'object'",
  "The spread operator can copy arrays",
  "JavaScript has function hoisting",
  "'[] == ![]' evaluates to true",
  "console.log(typeof NaN) returns 'number'",
  "'use strict' enables strict mode in JS",
  "In JS, functions are first-class citizens",
  "Promises help handle asynchronous operations",
  "setTimeout is used to delay execution",
  "'5' + 5 results in '55'",
];

messages = [
  "Brendan Eich created JS at Netscape in 1995. It was written in just 10 days.",
  "Strings in JS are immutable, meaning they cannot be edited but can be replaced.",
  "The plus operator gives the sum of two numbers.",
  "'1' + '1' concatenates the strings, resulting in '11'.",
  "Arrays are a special type of object in JavaScript.",
  "'let' creates a variable that is only accessible within the block it was declared in.",
  "NaN represents a value that is 'Not a Number'.",
  "In JavaScript, an empty array is considered truthy.",
  "Arrays in JavaScript can hold multiple data types such as strings, numbers, and objects.",
  "JavaScript is case-sensitive, so 'a' is different from 'A'.",
  "'===' checks both the value and the data type, while '==' only checks value.",
  "'var' is function-scoped, not block-scoped.",
  "'null' is a primitive value but its type is 'object' in JavaScript.",
  "JavaScript is single-threaded, meaning it can only execute one operation at a time.",
  "Arrow functions inherit 'this' from the enclosing lexical context.",
  "'typeof null' is a long-standing bug in JavaScript that returns 'object'.",
  "The spread operator (...) can be used to copy the contents of arrays.",
  "JavaScript hoists function declarations to the top of the scope.",
  "Due to type coercion and how JS evaluates the condition, '[] == ![]' is true.",
  "Even though NaN stands for 'Not a Number', its type is 'number'.",
  "'use strict' enables strict mode, which helps in writing safer JavaScript code.",
  "Functions in JavaScript are first-class, meaning they can be treated like any other variable.",
  "Promises allow you to handle asynchronous code more easily, avoiding callback hell.",
  "setTimeout is a built-in function that delays the execution of a function by a specified time.",
  "When you add a string and a number in JavaScript, the number gets converted to a string, resulting in '55'.",
];

rightAnswers = [
  "True",
  "False",
  "True",
  "True",
  "False",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "False",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
  "True",
];

function init() {
  buttons.forEach(function (button) {
    button.addEventListener("click", () => handleButton(button));
  });
}

function handleButton(button) {
  const cuurentQuestion = questionNumber;
  if (button == nextQuestion) {
    handleNextQuestion();
  } else if (button.innerText == rightAnswers[cuurentQuestion]) {
    handleCorrect(button);
    incrementTraial();
    checkEndGame(cuurentQuestion);
  } else {
    handleWrong(button);
    incrementTraial();
    checkEndGame(cuurentQuestion);
  }
}

function handleCorrect(button) {
  button.classList.add("correct");
  disableAnswerButtons();
  incrementScore();
  showMessage();
  enableButton(nextQuestion);
}
function handleWrong(button) {
  button.classList.add("wrong");
  disableAnswerButtons();
  showMessage();
  enableButton(nextQuestion);
}
function handleNextQuestion(button) {
  question.innerText = questions[questionNumber];
  reset();
  hideMessage();
}
function checkEndGame(numOfTrails) {
  if (numOfTrails == questions.length - 1) {
    disableAnswerButtons();
    disableButton(nextQuestion);
    nextQuestion.innerText = "no more questions";
  } else return;
}
function disableAnswerButtons() {
  disableButton(rightAnswer);
  disableButton(wrongAnswer);
}
function reset() {
  disableButton(nextQuestion);
  enableButton(rightAnswer);
  enableButton(wrongAnswer);
  buttons.forEach(function (button) {
    button.classList.remove("correct", "wrong");
  });
}
function incrementScore() {
  score.innerText = parseInt(score.innerText) + 1;
}
function incrementTraial() {
  questionNumber++;
}
function showMessage() {
  message.innerText = messages[questionNumber];
  message.classList.add("show-message");
}
function hideMessage() {
  message.classList.remove("show-message");
}
function enableButton(button) {
  button.disabled = false;
  button.style.pointerEvents = "auto";
}
function disableButton(button) {
  button.disabled = true;
  button.style.pointerEvents = "none";
}
init();
