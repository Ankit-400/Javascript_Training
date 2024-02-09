'use strict';

var number = Math.floor((Math.random() * 20) + 1);
var result_msg = document.querySelector('.message');
var score = document.querySelector('.score');
var highscore = document.querySelector('.highscore');
console.log("Number is : ", number);

document.querySelector('.check').addEventListener('click', function() {
    var input = document.querySelector('.guess').value;
    if(input == ''){
        result_msg.textContent = '⛔ No Number!';
    }
    else if(input == number) {
        result_msg.textContent = '🎉 Correct Number !!';
        highscore.textContent = Math.max(score.textContent, highscore.textContent);
        document.querySelector('main').style.backgroundColor = "#60b347";
        document.querySelector('header').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = number;
    }
    else if(input>number) {
        result_msg.textContent = '📈 Too High!';
        score.textContent = score.textContent - 1;
    }
    else if(input<number) {
        result_msg.textContent = '📉 Too Low!';
        score.textContent = score.textContent - 1;
    }

    if(score.textContent == 0)
    {
        result_msg.textContent = ' 💥You Lost The Game!'
        document.querySelector('.check').setAttribute("disabled", true);
    }
})

document.querySelector('.again').addEventListener('click', function() {
    result_msg.textContent = "Start guessing...";
    number = Math.floor((Math.random() * 20) + 1);
    console.log("Number is : ", number);
    score.textContent = 20;

    document.querySelector('.check').removeAttribute("disabled");

    document.querySelector('main').style.backgroundColor = "#222";
    document.querySelector('header').style.backgroundColor = "#222";

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})