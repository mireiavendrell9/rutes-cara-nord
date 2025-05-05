document.addEventListener("DOMContentLoaded", function () {
    // Scroll cap a dalt
    window.addEventListener("scroll", function () {
        let btn = document.getElementById("scrollTopBtn");
        if (btn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        }
    });

    // Botó per tornar a dalt
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// Funció per gestionar la reserva de places
function reservarPlaça(id, boto) {
    const places = document.getElementById(id);
    let numPlaces = parseInt(places.innerText);

    if (numPlaces > 0) {
        numPlaces--;
        places.innerText = numPlaces;

        if (numPlaces === 0) {
            boto.innerText = "Complet";
            boto.classList.remove("btn-success");
            boto.classList.add("btn-secondary");
            boto.disabled = true;
        }
    }
}
const imatgesGaleria = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg",
    "images/foto7.jpg",
    "images/foto8.jpg"
  ];
  
  let indexActual = 0;
  let intervalSlider;
  
  function mostrarImatge(index) {
    const img = document.getElementById("imatgeGaleria");
    img.style.opacity = 0;
  
    setTimeout(() => {
      img.src = imatgesGaleria[index];
      img.style.opacity = 1;
    }, 200);
  }
  
  function canviarImatge(direccio) {
    indexActual += direccio;
    if (indexActual < 0) indexActual = imatgesGaleria.length - 1;
    if (indexActual >= imatgesGaleria.length) indexActual = 0;
    mostrarImatge(indexActual);
  }
  
  function iniciarSlider() {
    intervalSlider = setInterval(() => {
      canviarImatge(1);
    }, 5000);
  }
  
  function aturarSlider() {
    clearInterval(intervalSlider);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    mostrarImatge(indexActual);
    iniciarSlider();
  
    const imatge = document.getElementById("imatgeGaleria");
  
    // Atura el slider en passar el cursor per sobre
    imatge.addEventListener("mouseover", aturarSlider);
  
    // Repren el slider en treure el cursor
    imatge.addEventListener("mouseout", iniciarSlider);
  });