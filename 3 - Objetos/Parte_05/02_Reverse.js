// Uso do Reverse juntamente com o JSON:

// Não tão diferente do exercício anterior,
//neste apenas faremos com que a ordem fique inversa.

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

const ordenadoNome = ordenar(clientes, "nome", "descrescente");
const ordenadoInverso = ordenadoNome.reverse();

console.log(ordenadoInverso);

function ordenar2(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
  
    if (ordem !== "crescente") {
      resultado.reverse();
    }
  
    return resultado;
};

console.log(ordenadoNome);
