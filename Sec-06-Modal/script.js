'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');


for(let i = 0; i<btnOpenModal.length; i++)
{
    btnOpenModal[i].addEventListener('click', function(){
        console.log("Clicked", i+1);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

 document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
 })
