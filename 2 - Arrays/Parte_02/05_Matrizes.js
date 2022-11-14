// Matrizes é um outro nome para Lista de Duas Dimensões,
//e mais usado também.

// Possui este nome porque ao chamar a lista vemos duas
// arrays uma ao lado da outra, desta forma: [][];

// Veja o exemplo dos funcionários:

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

// Percebe-se que a array "funcionarios" possui três arrays
//dentro dele. Podemos chamar esta array de Matriz ou Lista de Duas
//Dimensões.

// Para acessar as arrays que estão dentro da Matriz funcionario.
//Basta seguir o seguinte passo:

//O funcionamento da Matriz não é tão diferente da array, porém,
//temos duas [][], uma indicando qual array nós queremos acionar
//e a outra para elemento da array acionada queremos selecionar.

// Exemplo:

console.log(funcionarios[1][2]);

// O console.log nos forncerá o número: 28.

// Isso porque determinamos que a array selecionada está no índice
//[1] que seria "idades" e depois selecionamos o elemento que se
//encontra no índice 2, que seria o número 28.

// Obs: Fazer matrizes com mais de 4 ou 5 dimensões pode se tornar
//bem díficl a manutenção do código.

