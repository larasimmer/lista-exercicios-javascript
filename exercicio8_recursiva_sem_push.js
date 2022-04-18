/////VARIÁVEIS

let resultado = [];

/////CHAMANDO FUNÇÕES

contarDecrescente(100);
console.log(resultado.reverse());

/////DECLARANDO FUNÇÕES

function contarDecrescente(n) {
    if (n == 1) {
        resultado.unshift(1);
    } else if (n < 1) {
        resultado = [];
    } else {
        resultado.unshift(n);
        contarDecrescente(n - 1);
    }

    return resultado;
}