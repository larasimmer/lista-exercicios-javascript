/////VARIÁVEIS

let letras = "AAAABAAAAAAABBBAAAAABBBBBAAAAABABBBBBBBBBBBBA";
let novoArray = [];
let arraySoDeB = [];
let maiorIntervalo;

/////CHAMANDO FUNÇÕES

lacuna(letras);
arraySoDeB = novoArray.filter(filtrarApenasB);
verificarMaiorIntervalo();

/////DECLARANDO FUNÇÕES

function lacuna(string) {
    for (let i = 0; i < string.length; i++) {
        novoArray = string.split("A");
    }
}

function filtrarApenasB(elemento) {
    return elemento.includes("B");
}

function verificarMaiorIntervalo() {
    maiorIntervalo = arraySoDeB[0].length;
    for (let j = 0; j < arraySoDeB.length; j++) {
        if (arraySoDeB[j].length > maiorIntervalo) {
            maiorIntervalo = arraySoDeB[j].length;
        }
    }

    console.log("O maior intervalo de B na string Letras é " + maiorIntervalo);
}