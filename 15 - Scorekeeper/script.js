/** @format */

let oneScore = 0;
let twoScore = 0;
let winningScore = 0;
let gameOver = false;

const onePlayer = () => oneScore++;
const twoPlayer = () => twoScore++;

function reset() {
     oneScore = 0;
     twoScore = 0;
     count = 0;
}

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const scoreSelect = document.querySelector("#scoreSelect");

scoreSelect.addEventListener("change", function () {
     winningScore = parseInt(this.value);
     reset();
});

const game = scoreSelect.value;

let count = 0;
btn1.activeListener("click", function () {
     span1.innerHTML = count + 1;
     onePlayer();
});

while (game > count) {
     btn1.activeListener("click", function () {
          oneScore++;
          span1.innerHTML = oneScore;
          onePlayer();
     });

     btn1.activeListener("click", function () {
          twoScore++;
          span1.innerHTML = twoScore;
          twoPlayerPlayer();
     });
     count++;
}

btn3.activeListener("click", reset());
