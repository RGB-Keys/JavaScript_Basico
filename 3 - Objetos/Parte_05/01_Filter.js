// Uso do Filter juntamento com o JSON:

// Diferente do exercício anterior neste queremos filtrar algo específico.

// Pense o seguinte:

// Dentro da lista tem vários registros, sendo que alguns que
//moram em apartamento não escreveram o complemento.

// Imagine ter que buscar cada um destes de um a um no olho.

// Para isso utilizaremos o método filter para filtrar apenas
//as pessoas que moram em apartamento e não especificaram o
//complemento.

const clientes = require("./00_Lista.json");

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return ( 
        cliente.endereco.apartamento && 
        !cliente.endereco.hasOwnProperty("complemento")
        )
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);

// O "hasOwnProperty" foi utilizado para identificar se temos aquilo
//que foi especificado, no caso "complemento".

// O "hasOwnProperty" identifica se tem, por isso foi usado uma "!"
//pois queriamos o contrário, queremos saber daqueles que não tem.