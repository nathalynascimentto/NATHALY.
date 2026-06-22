const btn = document.getElementById("btnTrailer");

btn.addEventListener("click", () => {
    window.open(
        "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        "_blank"
    );
});

// Efeito de aparecimento ao rolar

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "1s";

    observer.observe(card);

});
