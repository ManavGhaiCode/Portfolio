const cursor = document.querySelector('#cursor');
cursor.style.top = 0 ;
cursor.style.left = 0 ;

window.addEventListener("mousemove", e => {
    cursor.style.display = "block";

    cursor.style.top = `${e.clientY - 50}px`;
    cursor.style.left = `${e.clientX - 50}px`;
});

document.body.addEventListener("mouseleave", e => {
    cursor.style.display = null;
});