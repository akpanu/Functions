'use strict';
const polBtn = document.querySelector(`.poll`);
const poll = {
  question: `What is your favorite programming language?`,
  options: [`0: JavaScript`, `1: Python`, `3: Rust`, `3: C++`],
  // This generates [0,0,0,0].
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const option = Number(
      prompt(
        `${this.question}\n` +
          `${this.options.join(`\n`)}\n(Write option number)`
      )
    );

    if (option >= 0) {
      if (option >= 0 && option < this.answers.length) {
        this.answers[option]++;
      } else alert(`Invalid option😒`);
    } else alert(`Invalid input`);
  },
  displayResults(str) {
    // console.log(str);
    if (typeof str === `object`) console.log(str);
    if (typeof str === `string`) console.log(`Poll results are: ${str}`);
  },
};

// polBtn.addEventListener('click', poll.registerNewAnswer().bind(poll));
polBtn.addEventListener('click', function () {
  console.clear();
  poll.registerNewAnswer();
  poll.displayResults(poll.answers);
  //   console.log(typeof 'string');
  //   console.log(typeof new Array(3));
});
// poll.registerNewAnswer();
// console.log(`Length of options array: ${poll.options.length}`);
// console.log(`Length of answers array: ${poll.answers.length}`);
