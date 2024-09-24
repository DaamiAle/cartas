//document.getElementById('audio').volume = 1; // Volumen al 30%

/*
document.querySelectorAll('.balloon').forEach(function(balloon) {
    balloon.addEventListener('click', function() {
        balloon.style.animation = 'pop 0.5s ease-out forwards';
    });
});

document.querySelectorAll('.balloon').forEach(function(balloon) {
    balloon.addEventListener('click', function() {
        balloon.classList.remove('balloon'); // Quitamos la clase balloon
        balloon.classList.add('pop'); // Añadimos la clase pop
    });
});

*/

function backToFloat() {
    balloon.classList.remove('pop'); // Vuelve a la animación inicial
    balloon.classList.add('pop'); // Agregamos la animación de 'pop'
}

const balloonsContainer = document.querySelector('.balloons');
const numBalloons = 30; // Número de globos que deseas generar
// Array con las rutas de las imágenes de globos
const balloonImages = ['balloon1.png', 'balloon2.png', 'balloon3.png'];
// Función para generar globos
function createBalloon() {
    const balloon = document.createElement('img');
    
    // Selección aleatoria de una de las imágenes
    const randomImage = balloonImages[Math.floor(Math.random() * balloonImages.length)];
    balloon.src = randomImage;
    balloon.classList.add('balloon');
    balloon.classList.add('float');

    // Posición horizontal aleatoria (dentro del contenedor)
    const leftPosition = Math.random() * 90; // Entre 0% y 90% para no salirse del contenedor
    balloon.style.left = `${leftPosition}%`;

    // Animación aleatoria (destiempo)
    const duration = Math.random() * 3 + 3; // Duración entre 3s y 6s
    const delay = Math.random() * 5; // Retraso aleatorio hasta 5 segundos
    balloon.style.animationDuration = `${duration}s`;
    balloon.style.animationDelay = `${delay}s`;

    // Agregar evento de click para la animación de "pop"
    balloon.addEventListener('click', function() {
        balloon.classList.remove('float'); // Quitamos la animación de flotar
        balloon.classList.add('pop'); // Agregamos la animación de 'pop'
        setTimeout('backToFloat', 5000); // Coincide con la duración de la animación 'flyAway'
    });

    balloonsContainer.appendChild(balloon);
}

// Generar todos los globos
for (let i = 0; i < numBalloons; i++) {
    createBalloon();
}
// reproduce el audio
function playAudio() {
    document.getElementById('audio').play();
}

