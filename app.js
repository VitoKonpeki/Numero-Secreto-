let numeroSecreto = Math.floor(Math.random()* 20 ) + 1;
// console.log(numeroSecreto)

function verificarChute() {
    const chute = Number(document.getElementById("chute").value);
    let mensagem = document.getElementById("mensagem");

if (chute == numeroSecreto) {
    mensagem.textContent = "Parabens você acertou o número secreto!😊";
} else if (chute > numeroSecreto) {
    mensagem.textContent = `O número secreto é menor que ${chute}`;
} else if (chute < numeroSecreto) {
    mensagem.textContent = `O número secreto é maior que ${chute}`;
}
}