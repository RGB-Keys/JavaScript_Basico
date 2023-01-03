// Sintaxe de Espalhamento em objetos:

// Uso do Spread Operator (...):

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};
  
cliente.enderecos = [
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

// Aqui vemos dois exemplos, onde temos uma função que
//ficará encarregada de nos fornecer o telefone do cliente
//para isso criamos ela juntamente com dois argumentos, que
//seriam os dois telefones do cliente.



function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
  
// Neste caso, vemos que funciona, porém, o código não está
//nada limpo. É funcional, mas pode ficar melhor.

// Imagine ter mais que dois argumentos ou números.

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// O uso do Spread Operator facilita nossa vida, temos dois argumentos e
//dois números no objeto. Basta utilizá-lo (...) e então ele faz
//o serviço.

ligaParaCliente(...cliente.telefone);


// Veja este outro caso em que se cria um novo objeto chamado de
//"encomenda", nele precisamos do nome do cliente e de seu endereço
//veja como o spread operator facilita no momento de endereços, pois
//não precisaríamos ter que escrever todos os dados de endereços, pois
//ele próprio se encarrega disso.

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};
  
console.log(encomenda);