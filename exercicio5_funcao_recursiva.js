/////VARIÁVEIS

let resultado = [];

/////CHAMANDO FUNÇÕES

contarDecrescente(100);
console.log(resultado);

/////DECLARANDO FUNÇÕES

function contarDecrescente(n) {
    if (n == 1) {
        resultado.push(1);
    } else if (n < 1) {
        resultado = [];
    } else {
        resultado.push(n);
        contarDecrescente(n - 1);
    }

    return resultado;
}