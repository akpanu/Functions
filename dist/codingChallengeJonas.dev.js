'use strict';

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
    this.displayResults();
    this.displayResults("string");
  },
  displayResults: function displayResults() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "array";

    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log("Poll results are ".concat(this.answers.join(", ")));
    }
  }
};
poll.displayResults.call({
  answers: [5, 2, 3]
}, "string");
poll.displayResults.call({
  answers: [5, 2, 3]
});
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));