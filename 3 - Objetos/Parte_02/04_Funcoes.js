// Uso de funções dentro de um objeto:

// Já deu para perceber que o uso dos objetos é bastante amplo,
//pois, até mesmo funções podem ser inseridas dentro dele.

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log(" ");
            console.log("Saldo insuficiente");
            console.log(" ");
        }
        else {
            this.saldo -= valor;
            console.log(" ");
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
            console.log(" ");
        }
    }
};


cliente.efetuaPagamento(150);

// Como pode ser observador, foi criado uma função dentor de
//uma propriedade chamada "efetuaPagamento:", esta propriedade
//ficou encarregada de fazer uma "simulação" de um pagamento
//sendo feito e conferindo se o saldo do cliente era suficiente
//para realizar o pagamento ou não.