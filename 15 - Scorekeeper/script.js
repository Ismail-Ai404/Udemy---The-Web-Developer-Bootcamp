/** @format */

const oneScore = 0;
const twoScore = 0;

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

const game = scoreSelect.value;
let count = 0;

while (game > count) {
     btn1.activeListener("click", onePlayer());
     btn2.activeListener("click", twoPlayer());
     count;
}

btn3.activeListener("click", reset());
