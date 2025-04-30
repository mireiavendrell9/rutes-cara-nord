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