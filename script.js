document.addEventListener('DOMContentLoaded', function () {
    setInterval(criarMorango, 5000); 
});

function criarMorango() {
    const morango = document.createElement('div');
    morango.classList.add('morango');
    document.body.appendChild(morango);

    morango.style.left = `${Math.random() * window.innerWidth}px`;

    morango.addEventListener('animationiteration', function () {
        morango.style.left = `${Math.random() * window.innerWidth}px`;
    });
}
