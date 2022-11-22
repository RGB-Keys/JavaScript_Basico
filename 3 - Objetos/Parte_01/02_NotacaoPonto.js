// Uso do objeto + . para filtrar informações que queremos dentro de um objeto

// Para isso, cria-se um objeto com nome cliente e com alguns dados desse cliente:

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "18484581515",
    email: "andre@dominio.com"
};

console.log("Dados do cliente: ");
console.log(" ");
console.log(cliente);
console.log(" ");

// Neste caso, percebe-se que todos os dados encontrados no objeto cliente foram declarados.
// Mas se quisermos, apenas alguns desses dados?

console.log("Uso do cliente.nome para filtrar apenas o nome e logo após cliente.idade para filtrar apenas a idade: ");
console.log(" ");
console.log(`O nome do cliente é ${cliente.nome} e essa tem ${cliente.idade} anos.`);
console.log(" ");

// Neste exemplo, pegamos apenas o nome e a idade que se encontra no objeto cliente. Trazendo um dinamismo no uso dos objetos.

console.log("Uso do cliente.cpf + .substring(0,3) para filtrar apenas o que começa a partir da posição 0 até a posição 3: ")
console.log(" ");
console.log(`Os primeiros digitos do CPF são: ${cliente.cpf.substring(0, 3)}`);

// Aqui fomos mais além, apenas permitindo que os três primeiros digitos da chave "cpf" fosse declarada.