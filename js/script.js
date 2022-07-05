"use strict"

let item = document.querySelector('.content > div');
let input = document.querySelector('input');
let button = document.querySelector('.button');
let item1 = document.getElementById('item1');
let heading = document.querySelector('.heading');
button.onclick = function() {
    item.classList.toggle('blue');
    item1.classList.toggle('red');
    heading.classList.toggle('heading__1');
  }

  console.log(input.value);

  let form = document.querySelector('form');

  form.onsubmit = function(evt) {
    if (input.value == 'хуй' || input.value == 'Хуй' || input.value == 'Пизда' || input.value == 'пизда') {
        alert('Не ругайся!');
    } else {
        evt.preventDefault();
        heading.textContent = input.value;
    }
    input.value = '';
  };
