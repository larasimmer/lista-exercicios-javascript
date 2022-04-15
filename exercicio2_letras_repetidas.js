/////VARIÁVEIS

const botaoExecutar = document.getElementById("executar");
let vetor = ["a", "a", "a", "a", "c", "a", "a", "b", "a", "a", "a", "p"];
let odd = [];

/////CHAMANDO FUNÇÕES

botaoExecutar.addEventListener("click",verificarElementoDiferente);

/////DECLARANDO FUNÇÕES

function verificarElementoDiferente() {
    let elementoAtual = vetor[0];
  
    for (let i=0; i < vetor.length; i++) {
        if (vetor[i] == elementoAtual) {
            elementoAtual = vetor[i];
        } else {
            odd.push(vetor[i]);
        }
    }

    console.log(odd);
}

