/////VARIÁVEIS

let vetorAlfabeto = ["A", "B", "C", "D", "E"];
let quantidadeDeRotacoes = 1;

/////CHAMANDO FUNÇÕES

rotacao(vetorAlfabeto, quantidadeDeRotacoes);

/////DECLARANDO FUNÇÕES

function rotacao(vetor,quantidadeDeRotacoes) {
    if (vetor != "") {
        for (i=0; i < quantidadeDeRotacoes; i++) {
            vetor.unshift(vetor[vetor.length - 1]);
            vetor.pop();
        }
    } else {
        vetor = [];
    }
   
    console.log(vetor);
}

