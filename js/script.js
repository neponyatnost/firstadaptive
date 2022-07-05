"use strict"

// let item = document.querySelector('.item');
// let input = document.querySelector('input');
// let button = document.querySelectorAll('.item');
// let item1 = document.getElementById('item1');
let heading = document.querySelector('.heading');
// button.forEach(button => button.classList.add('blue'));
// button.onclick = function() {
//     item.classList.toggle('blue');
//     item1.classList.toggle('red');
//     heading.classList.toggle('heading__1');
//   };

//   console.log(input.value);

  let form = document.querySelector('.form');

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
/* Перебираем списки */
items.forEach(function(el) {
  /* Назначаем обработчик текущему списку */
  el.addEventListener('click', function(ev) {
    // Прерываем всплытие события, 
    // чтобы не срабатывал обработчик, 
    // который мы добавим к document или body
    ev.stopPropagation();
    /* Убираем класс active у всех списков, кроме текущего */
    items.forEach(el => { if (el != this) { el.classList.remove('blue') }; });
    // Переключаем класс у текущего списка
    this.classList.toggle('blue');
  });
});

/* Назначаем обработчик нажатия вне списков */
document.addEventListener('click', function() {
  /* Перебираем все списки и удаляем у них класс active */
  items.forEach(el => el.classList.toggle('blue', false));
});

let modalOpen = document.querySelector('.modal__open');
let modalClose = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');

modalOpen.onclick = function(e) {
    modal.style.display = 'block';
    e.preventDefault();
}

modalClose.onclick = function() {
    modal.style.display = 'none';
}
