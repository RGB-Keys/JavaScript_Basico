// Função padrão:

const lukeLogin = () => {
    let array = [];
    for ( i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Luke logado com sucesso!"
}

const leiaLogin = () => {
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Leia logada com sucesso!"
}

lukeLogin();
leiaLogin();

// Percebe-se que ambas as funções executam, por assim dizer, a mesma coisa.
// Portanto, podemos o conceito chamado DRY (Don't Repeat Yourself), para evirtarmos redundância.
// Para resolver esta situação basta apenas fazermos uma função e declararmos um parâmetro que estará responsável pelo nome da pessoa.

const usuarioLogin = (pessoa) => {
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return `${pessoa} logou com sucesso no sistema!`
}

usuarioLogin("Rodolfo");