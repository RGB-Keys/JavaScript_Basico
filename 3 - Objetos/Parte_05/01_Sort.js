// Uso do Sort juntamento com JSON:

// Neste exerício apenas iremos ordenar a lista.


const clientes = require("./00_Lista.json");

function ordenar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultado;
};

const ordenadoNome = ordenar(clientes, "nome");
const ordenadoInverso = ordenadoNome.reverse();

console.log(ordenadoInverso);

// Para isso foi feito uma função com dois argumentos:

// * - Lista;
// * - Propriedade (Chave);

// Usamos o método "sort" que serve justamente para ordenar.

// E para atendermos os requisitos do método sort, uso-se o
//condicional if.