// Exibe o botão de voltar ao topo quando rolar a página
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const myButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Rola a página para o topo quando o botão é clicado
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Animação suave ao rolar para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
