// Deletando chaves e valores:

// Para deletar basta utilizar o "delete":

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log("Dados do objPersonagem: ");
console.log(objPersonagem);
console.log(" ");

console.log("Deletando a chave aliado com a notação objPersonagem.aliado: ");
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
console.log(" ");


console.log("Deletando a chave status com a notação objPersonagem['status']: ");
delete objPersonagem["status"]

console.log(objPersonagem.status) //undefined
console.log(" ");

console.log("Dados do objPersonagem após o delete: ");
console.log(objPersonagem);
console.log(" ");

// Delete é atribuído como booleano, ou seja, true ou false. Porém, ainda que ele tente deletar alguma
//chave que não exista, ele fornecerá true.