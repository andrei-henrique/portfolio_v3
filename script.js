const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type == 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



function copyEmail() {

    var emailElement = document.getElementById("btnemail");


    var inputElement = document.createElement("input");
    inputElement.value = emailElement.textContent;

    
    document.body.appendChild(inputElement);

    inputElement.select();
    inputElement.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    document.body.removeChild(inputElement);

    emailElement.textContent = "Email copiado";

    setTimeout(function () {
        emailElement.textContent = "andrei.henriquepro@gmail.com";
    }, 1000);
}










document.addEventListener("DOMContentLoaded", function() {
    function ativaLetra(elemento) {
const arrTexto = elemento.innerHTML.split('');
elemento.innerHTML = '';
arrTexto.forEach((letra, i) => {
        setTimeout(() => {
elemento.innerHTML += letra;
        }, 75 * i);});
    }

    function escrevendoLetra() {
const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
    }
    escrevendoLetra();
});
