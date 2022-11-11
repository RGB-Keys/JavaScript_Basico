// Uso do método splice();

// O splice() pode tanto remover algum elemento como também adicioanar,
//basta inicialmente informar o índice de início e a quantidade de elmentos
//que serão removidos a partir dali. 

// Caso não queira remover, basta só colocar o valor do índice
//e depois colocar 0.

// O terceiro parâmetro e por diante dentro do splice() é considerado
//algo que você queira adicionar na array.

// Supondo uma array com vários nomes, queremos remover os elementos "Ana" e "Caio"
//e adicionar o elemento "Rodrigo".

// Então podemos fazer da seguinte maneira:

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
console.log("Nomes antes do uso do splice(): ")
console.log(nomes);
console.log(" ");

nomes.splice(1,2, "Rodrigo");
console.log("Nomes após remover dois elementos e adicionado um elemento a partir do índice 1: ")
console.log(nomes);
console.log(" ");
