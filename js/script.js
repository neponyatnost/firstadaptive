"use strict"

let form = document.querySelector('form');
let heading = document.querySelector('.heading');

  form.onsubmit = function(evt) {
    if (input.value == 'хуй' || input.value == 'Хуй' || input.value == 'Пизда' || input.value == 'пизда') {
        alert('Не ругайся!');
    } else {
        evt.preventDefault();
        heading.textContent = input.value;
    }
    input.value = '';
  };


  let items = document.querySelectorAll('.item');
items.forEach(function(el) {
  el.addEventListener('click', function(ev) {
    ev.stopPropagation();
    items.forEach(el => { if (el != this) { el.classList.remove('blue') }; });
    this.classList.toggle('blue');
  });
});

document.addEventListener('click', function() {
  items.forEach(el => el.classList.toggle('blue', false));
});
