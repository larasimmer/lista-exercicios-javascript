/////VARIÁVEIS

const inputPosicaoInicial = document.getElementById("posicao-inicial");
const inputPosicaoFinal = document.getElementById("posicao-final");
const inputTamanhoDoPasso = document.getElementById("tamanho-passo");
const botaoCalcular = document.getElementById("calcular");
const spamQuantidadeDePassos = document.getElementById("quantidade-passos");
let quantidadeDePassos;

/////CHAMANDO FUNÇÕES

botaoCalcular.addEventListener("click", mostrarResultado);

/////DECLARANDO FUNÇÕES

function verificarInputsVazios() {
    if (inputPosicaoInicial.value == "" || inputPosicaoFinal.value == "" || inputTamanhoDoPasso.value == "") {
        alert("Preencha todos os campos!");
        return false;
    }

    return true;
}

function verificarTamanhoDoPassoNegativo() {
    if (inputTamanhoDoPasso.value <= 0) {
        alert("O tamanho do passo deve ser um valor maior do que zero!");
        return false;
    }

    return true;
}

function atravessaRua() {
    let camposPreenchidos = verificarInputsVazios();
    let tamanhoDoPassovalidado = verificarTamanhoDoPassoNegativo();

    if (camposPreenchidos == true && tamanhoDoPassovalidado == true) {
        quantidadeDePassos = Math.ceil((inputPosicaoFinal.value - inputPosicaoInicial.value)/inputTamanhoDoPasso.value);
    }
}

function mostrarResultado() {
    atravessaRua();
    spamQuantidadeDePassos.textContent = " " + quantidadeDePassos + " passos";
}