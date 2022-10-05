const cursor = document.querySelector('#cursor');
const rawSign = document.querySelector('#name');
const sign = document.querySelector('#name').textContent.split('');

rawSign.innerHTML = '';

sign.forEach(el => {
    rawSign.innerHTML += `<span class="name-text">${el}</span>`;
});

const tick = () => {
    const char = rawSign.querySelectorAll('span')[charIndex];
    char.classList.add('fade');

    charIndex++;

    if (charIndex === 10) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

let charIndex = 0;
let timer = setInterval(tick, 500);


window.addEventListener("mousemove", e => {
    cursor.style.display = "block";

    cursor.style.top = `${e.clientY - 50}px`;
    cursor.style.left = `${e.clientX - 50}px`;
});

document.body.addEventListener("mouseleave", e => {
    cursor.style.display = null;
});