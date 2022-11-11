// Métodos:

// É uma função que serve como uma propriedade do array ou de um
//objeto.

// Ele pode realizar tarefas prédefinidas usando os dados do array e
//dos parâmetros que passamos para eles, como adicionar, remover ou
//até encontrar elementos.


// ALGUNS DELES:

// * - concat():

// Anteriormente foi vista para concatenar Strings, mas ele também
//pode concatenar duas arrays.

// Não altera o array no qual foi chamado, então precisamos salvar esse
//resultado em um novo array.

const a = [1, 2];
console.log("Array sem a utilização do concat(): ")
console.log(a);
console.log(" ");

const b = a.concat([3,4]);
console.log("Array com a utilização do concat(): ")
console.log(b);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - filter():

// Retorna uma lista contando todos os elementos que passaram em um
//teste, ou seja, uma função escrita por nós.

// Não altera o array no qual foi chamado, então precisamos salvar esse
//resultado em um novo array.

console.log(" ");

const palavras = ['Limite', 'Estupendo', 'Correto', 'Ok', 'Tá', 'Riso', 'Descritível'];
console.log("Array sem a utilização do filter(): ")
console.log(palavras);
console.log(" ");


const selecao = palavras.filter(palavras => palavras.length > 6);
console.log("Array com a utilização do filter(): ")
console.log(selecao);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - find():

// Funciona de forma parecida com o filter, porém retorna apenas
//o primeiro valor que satisfizer o teste, podendo ser uma string
//ou um número.

// Lembre-se: Ele retornará o primeiro que atender a solicitação.

console.log(" ");

const c = [2, 3, 15, 88, 34];
console.log("Array sem a utilização do find(): ")
console.log(c);
console.log(" ");

const d = c.find(element => element > 10);
console.log("Array com a utilização do find(): ")
console.log(`O elemento que satifaz é: ${d}`)
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - findIndex():

// Funciona igual ao find(), mas retorna o índice em vez do elemento,
//possibilitando usá-lo em outras partes do código.

// Lembre-se: Ele retornará o primeiro que atender a solicitação.

console.log(" ");

const e = [9, 88, 44, 99, 8];
console.log("Array sem a utilização do findIndex(): ")
console.log(e);
console.log(" ");

const f = e.findIndex(element => element > 10);
console.log("Array com a utilização do findIndex(): ")
console.log(`O índice do elemento que satifaz é: ${f}`)
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - lastIndexOf():

// É igual o findIndex(), porém começa do último elemento.

console.log(" ");

const g = [55, 8, 44, 99];
console.log("Array sem a utilização do lastIndexOf(): ")
console.log(g);
console.log(" ");

const h = g.lastIndexOf(44, 3);
console.log("Array com a utilização do lastIndexOf(): ")
console.log(`O índice do elemento que satifaz é: ${h}`)
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - forEach():

// Executa uma função em cada elemento do array de forma individual.

// Não altera o array no qual foi chamado, então precisamos salvar esse
//resultado em um novo array.

console.log(" ");

const anoNovo = ['Hoje', 'é um', 'belo dia', 'de um', 'novo tempo', 'que começou.'];
console.log("Array sem a utilização do forEach(): ");
console.log(anoNovo);
console.log(" ");

console.log("Array sem a utilização do forEach(): ");
anoNovo.forEach(element => console.log(element));
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - pop():

// Remove o último elemento da array.

// Altera o array original removendo o elemento.

console.log(" ");

const i = [5, 10, 15, 21];
console.log("Array sem a utilização do pop(): ");
console.log(i);
console.log(" ");

console.log(`Elemento que será removido pelo pop(): ${i[3]}`);
i.pop();
console.log(" ");

console.log("Array com a utilização do pop(): ");
console.log(i);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - shift():

// Retira o primeiro elemento do array.

// Altera o array original removendo o elemento e trocando o índice
//de todos os elementos para um a menos do que eram, o índice 1 passa
//a ser o 0, o 2 passa a ser o 1, e assim por diante.

console.log(" ");

const j = [1.5, 2, 4, 6, 8];
console.log("Array sem a utilização do shift(): ");
console.log(j);
console.log(" ");

console.log(`Elemento que será removido pelo shift(): ${j[0]}`);
j.shift();
console.log(" ");

console.log("Array com a utilização do shift(): ");
console.log(j);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - push():

// Adiciona o elemento passado como parâmetro do array, porém
//na última posição.

// Altera o array original com o novo valor.

console.log(" ");

const addFim = [1.5, 3.0, 4.5, 6.0];
console.log("Array sem a utilização do push(): ");
console.log(addFim);
console.log(" ");

console.log("Elemento que será adicionado pelo push(): 7.5");
addFim.push(7.5);
console.log(" ");

console.log("Array com a utilização do push(): ")
console.log(addFim);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - unshift():

// Semelhante ao push(), porém adiciona na primeira posição e acaba
// trocando o índice de todos os elementos.

// Altera o array original com o novo valor.

console.log(" ");

const addInicio = [1.5, 3.0, 4.5, 6.0];
console.log("Array sem a utilização do unshift(): ");
console.log(addInicio);
console.log(" ");

console.log("Elemento que será adicionado pelo unshift(): 0");
addInicio.unshift(0);
console.log(" ");

console.log("Array com a utilização do unshift(): ")
console.log(addInicio);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - reduce():

// Utiliza uma função definida pelo usuário em cada um dos elementos,
//guardando o resultado em uma variável que pode ser acessada dentro
//da função que foi definida, retornando um único valor no final,
//reduzindo o array para um único valor.

console.log(" ");

const num = [8, 16, 32, 64, 128];
console.log("Array sem a utilização do reduce(): ");
console.log(num);
console.log(" ");

const iNum = 0;
console.log("Constante que receberá o novo valor pelo reduce(): 'iNum: 0'");
console.log(" ");

const reduzir = num.reduce((previousValue, currentValue) => previousValue + currentValue, iNum)
console.log("Elemento formado com a utilização do reduce(): ")
console.log(reduzir);
console.log(" ");

// Meu entendimento me levar a pensar que ele somou todos os valores
//reduzindo para um único valor e inseriu este novo valor dentro
//da const 'iNum'.

// Deixa de ser array.

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - reduceRight():

// Semelehante ao reduce(), mas começa do final da array e
//segue até o início.

console.log(" ");

const number = [10, 4, -6];
console.log("Array sem a utilização do reduceRight(): ");
console.log(number);
console.log(" ");

const inumber = 0;
console.log("Constante que receberá o novo valor pelo reduceRight(): 'inumber: 0'");
console.log(" ");

const reduzirDireita = number.reduce((previousValue, currentValue) => previousValue + currentValue, inumber)
console.log("Elemento formado com a utilização do reduceRight(): ")
console.log(reduzirDireita);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - reverse():

// Inverte a ordem dos elementos do array, então o primeiro vira o último
//o segundo o penúltimo e assim por diante.

console.log(" ");

const reverterNum = [1.5, 3.0, 4.5, 6.0];
console.log("Array sem a utilização do reverse(): ");
console.log(reverterNum);
console.log(" ");

reverterNum.reverse();
console.log("Array com a utilização do reverse(): ")
console.log(reverterNum);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - slice():

// Copia uma parte do array para outro array.

console.log(" ");

const listaNum = [10, 20, 30, 40, 50];
console.log("Array sem a utilização do slice(): ");
console.log(listaNum);
console.log(" ");

const copiaNum = listaNum.slice([3]);
console.log("Copia da array anterior a partir do 3 índice usando o slice(): ")
console.log(copiaNum);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - sort():

// Organiza o array de acordo com a classificação Unicode,
//onde os números vêm antes das letras, porém não funciona
//corretamente para números, onde temos que definir uma
//função que irá auxiliar o comando.

console.log(" ");

const errorNumSort = [1, 50, 10, 2]
console.log("Array de números sem a utilização do sort(): ");
console.log(errorNumSort);
console.log(" ");

errorNumSort.sort();
console.log("Organização feita usando o slice() em números: ");
console.log(errorNumSort);
console.log(" ");

const errorStringSort = ["Jan", "Aug", "Feb", "Set"]
console.log("Array de Strings sem a utilização do sort(): ");
console.log(errorStringSort);
console.log(" ");

errorStringSort.sort();
console.log("Organização feita usando o slice() em Strings: ");
console.log(errorStringSort);
console.log(" ");

console.log("///////////////////////////////////////////////////////");

///////////////////////////////////////////////////////

// * - splice():

// Consegue remover, um ou mais elementos consecutivos caso
//o segundo parâmetro tenha um valor maior que 0, e incluir um ou
//mais elementos a partir de um índice escolhido.

console.log(" ");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array sem a utilização do splice(): ");
console.log(fruits);
console.log(" ");

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("Uso do splice() para adicionar dois elementos no índice 2: ");
console.log(fruits);
console.log(" ");

const frutas = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array sem a utilização do splice(): ");
console.log(frutas);
console.log(" ");

frutas.splice(2, 2, "Lemon", "Kiwi");
console.log("Uso do splice() para adicionar dois e remover elementos existentes no índice 2: ");
console.log(frutas);
console.log(" ");

console.log("///////////////////////////////////////////////////////");