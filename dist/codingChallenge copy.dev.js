'use strict';

var polBtn = document.querySelector(".poll");
var poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "3: Rust", "3: C++"],
  // This generates [0,0,0,0].
  answers: new Array(4).fill(0),
  registerNewAnswer: function registerNewAnswer() {
    // get answer
    var answer = Number(prompt("".concat(this.question, "\n").concat(this.options.join("\n"), "\n(Write option number)")));
    console.log(answer); // Register answer

    typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
    console.log(this.answers);
  }
};