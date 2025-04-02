document.addEventListener("DOMContentLoaded", function() {
    // Seleccionem el botó i el menú
    let menuToggle = document.querySelector(".menu-toggle");
    let menu = document.querySelector(".menu");


    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function() {
            menu.classList.toggle("show");
        });
    }
});

// Mostrar el botó de scroll quan es fa scroll
window.onscroll = function() { showScrollButton(); };

function showScrollButton() {
    let btn = document.getElementById("scrollTopBtn");
    if (btn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
}

// Funció per tornar a dalt amb scroll 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reservarPlaça(id, boto) {
    let places = document.getElementById(id);
    let numPlaces = parseInt(places.innerText);

    if (numPlaces > 0) {
        numPlaces--; 
        places.innerText = numPlaces;

        if (numPlaces === 0) {
            boto.innerText = "Complet";
            boto.style.backgroundColor = "grey";
            boto.style.pointerEvents = "none"; 
            boto.style.cursor = "not-allowed";
        }
    }
}