// Adicionando e Alterando objetos:

// Ainda que tenhamos declarado um objeto, é possível
//alterar os valores que ele já possui ou adicionar outros
//que ainda não existem

// Fazendo um objeto com dados de uma pessoa, trabalharemos com o que foi falado:

console.log("Dados da pessoa: ");
console.log(" ");

const pessoa = {
    nome: "Artur",
    profissao: "Pedreiro",
};

console.log(pessoa);
console.log(" ");

console.log("Filtrando apenas seu nome: ");
console.log(pessoa.nome);
console.log(" ");

console.log("Chamando uma chave que ainda não existe (pessoa.telefone): ");
console.log(pessoa.telefone);
console.log(" ");

console.log("Chamando a mesma chave anterior, porém, declarando valor a ela (pessoa.telefone): ");
pessoa.telefone = '81 584684516';
console.log(pessoa.telefone);
console.log(" ");

console.log("Alterando o nome já existente no objeto pessoa: ");
pessoa.nome = "Artur Rocha";
console.log(pessoa);
console.log(" ");

// Nota-se que no exemplo final, vemos que a chave que antes não existia (telefone), passou a existir dentro do objeto pessoa e que
//o nome também já se encontra alterado.


// Ainda que se trate de uma variável constante, ela pode sim ser alterada.

// O que ela não pode é ser modificada por completo, como o exemplo abaixc:

const novaPessoa = {
    nome: "Pedro",
};

// novaPessoa = pessoa;

// O exemplo ficará comentado, pois ele ocasiona em erro.