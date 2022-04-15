/////VARIÁVEIS

let vetorAlfabeto = ["A", "B", "C", "D", "E"];
let quantidadeDeRotacoes = 2;

/////CHAMANDO FUNÇÕES

rotacao(vetorAlfabeto, quantidadeDeRotacoes);

/////DECLARANDO FUNÇÕES

function rotacao(vetor,quantidadeDeRotacoes) {
    if (vetor != "") {
        for (i=0; i < quantidadeDeRotacoes; i++) {
            vetor.unshift(vetor[4]);
            vetor.pop();
        }
    } else {
        vetor = [];
    }
   
    console.log(vetor);
}

