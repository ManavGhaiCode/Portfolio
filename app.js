const cursor = document.querySelector('#cursor');

window.addEventListener("mousemove", e => {
    cursor.style.display = "block";

    cursor.style.top = `${e.clientY - 50}px`;
    cursor.style.left = `${e.clientX - 50}px`;
});

document.body.addEventListener("mouseleave", e => {
    cursor.style.display = null;
});