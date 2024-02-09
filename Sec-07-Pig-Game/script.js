'use strict';

let curr0 = 0, curr1 = 0;
let total0 = 0, total1 = 0;
var flag = true; //flag true->0st player turn
var play = true;

const curr_p0 = document.querySelector('#current--0');
const curr_p1 = document.querySelector('#current--1');

const total_p0 = document.querySelector('#score--0');
const total_p1 = document.querySelector('#score--1');

document.querySelector('.dice').style.display = "none"
const btnRollDice = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

btnRollDice.addEventListener('click', function() {
    if(play)
    {
        const num = Math.floor(Math.random()*6 + 1);
        document.querySelector('.dice').style.display = "block"
        document.querySelector('.dice').src = `dice-${num}.png`;

        if(flag) {
            if(num==1) {
                curr0 = 0;
                curr_p0.textContent = 0;
                flag = !flag;
                document.querySelector('.player--0').   classList.toggle('player--active');
                document.querySelector('.player--1').   classList.toggle('player--active');
            }
        else{
            curr0+=num;
            curr_p0.textContent = curr0;
        }
    }
    else {
        if(num==1) {
            curr1 = 0;
            curr_p1.textContent = curr1;
            flag = !flag;
            document.querySelector('.player--0').classList.toggle('player--active');
            document.querySelector('.player--1').classList.toggle('player--active');
        }
        else{
            curr1+=num;
            curr_p1.textContent = curr1;
        }
    }
    }
})


btnHold.addEventListener('click', function(){
    if(play)
    {
        if(flag){
            total0+=curr0;
            total_p0.textContent = total0;
            curr0 = 0;
            curr_p0.textContent = curr0;
        }
        else{
            total1+=curr1;
            total_p1.textContent = total1;
            curr1 = 0;
            curr_p1.textContent = curr1;
        }
        
        if(flag && total0>=100) {
            document.querySelector('.player--0').classList.toggle('player--winner');
            document.querySelector('#name--0').style.color = '#c7365f';
            document.querySelector('.dice').style.display = "none";
            play = !play;
        }
        else if(!flag && total1>=100){
            document.querySelector('.player--1').classList.toggle('player--winner');
            document.querySelector('#name--1').style.color = '#c7365f';
            document.querySelector('.dice').style.display = "none";
            play = !play;
        }
        flag = !flag;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    }
})

document.querySelector('.btn--new').addEventListener('click', function(){
    curr0 = 0, curr1 = 0;
    total0 = 0, total1 = 0;
    curr_p0.textContent = 0;
    curr_p1.textContent = 0;
    total_p0.textContent = 0;
    total_p1.textContent = 0;
    document.querySelector('.dice').style.display = "none";
    flag=true;
    play=true;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
})

