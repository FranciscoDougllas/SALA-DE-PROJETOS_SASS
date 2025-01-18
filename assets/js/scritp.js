const gradientes = [
    'linear-gradient(45deg, #6E6E6E, #545454, #212121)', // Escuro
    'linear-gradient(45deg, #ccc, #BDC3C7)',    // Claro
    'linear-gradient(45deg, #222, #000)',       // Escuro
    'linear-gradient(45deg, #dbe7ea, #fff)'     // Claro
];

const fontesClaras = [true, false, true, false];

let indiceGradienteAtual = 0;

document.getElementById('btn-button').addEventListener('click', function (event) {
    document.body.style.background = gradientes[indiceGradienteAtual];
    event.target.style.background = gradientes[indiceGradienteAtual];

    const corFonte = fontesClaras[indiceGradienteAtual] ? '#fff' : '#000';
    document.body.style.color = corFonte;
    event.target.style.color = corFonte;

    indiceGradienteAtual = (indiceGradienteAtual + 1) % gradientes.length;
});




document.getElementById("btn-button2").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
        setTimeout(function() {
            navbar.style.display = "none";
        }, 5000); // 3000 milissegundos = 3 segundos
    }
});


