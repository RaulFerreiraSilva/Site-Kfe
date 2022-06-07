const card = document.querySelector('.card__inner');
const card1 = document.querySelector('.card__inner1');
const card2 = document.querySelector('.card__inner2');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})

card1.addEventListener('click', function(){
    card1.classList.toggle('is-flipped');
})

card2.addEventListener('click', function(){
    card2.classList.toggle('is-flipped');
})
