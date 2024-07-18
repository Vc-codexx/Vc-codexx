const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('.sub-head')


function open() {
    nav.style.left = '0';
}

openBtn.addEventListener('click', open);


function close() {
    nav.style.left = '-150%';
}

closeBtn.addEventListener('click', close);