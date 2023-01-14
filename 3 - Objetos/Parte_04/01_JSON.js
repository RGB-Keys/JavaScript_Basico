// O Formato JSON:

// Também chamado de Notação de Objeto JavaScript

// Tomando como exemplo prática um objeto chamado cliente,
//veremos as diferenças:

// Cliente.java:

// const cliente = {
//    nome: "Joao",
//    email: "joao@firma.com",
//    telefone: ["11223344", "11922334453"],
//    endereco: {
//      rua: "R. Joseph Climber",
//      numero: 1337,
//      apartamento: true,
//      complemento: "ap 934",
//    },
// };



// Cliente.json:

// {
//    "nome": "Joao",
//    "email": "joao@firma.com",
//    "telefone": ["11223344", "11922334453"],
//    "endereco": {
//      "rua": "R. Joseph Climber",
//      "numero": 1337,
//      "apartamento": true,
//      "complemento": "ap 934"
//    }
// }



// De cara percebe-se algumas diferenças no Cliente.json:

// * Não existem variáveis:
//  -> No json não é necessário;

// * Chaves das propriedades têm aspas duplas(""):
//  -> Assim como Strings as chaves também são escritas com aspas duplas;

// * Arrays e Objetos aninhados podem existir:
//  -> E apenas tipos primitivos;

// * Restrição de trailing comma:
//  -> Proíbido ter vírgula no último item;



// Outras características do Json:

// * Funções não são permitidas:
//  -> Precisa-se omitir do nosso objeto;

// * Comentários não são permitidos:
//  -> Assim como as funções estes também não são permitidos;

// * O undefined também não é permitido:
//  -> Apenas tipos primitivos;

// * Algumas estruturas mais complexas não são permitidas:
//  -> Como por exemplo datas ou a escrita em Regex;