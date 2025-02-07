document.addEventListener("DOMContentLoaded", function () {
    console.log("Site da campanha carregado!");

    // Animações ao rolar a página
    function animateOnScroll() {
        let elements = document.querySelectorAll(".fade-in, .slide-in");
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Chama na inicialização
});