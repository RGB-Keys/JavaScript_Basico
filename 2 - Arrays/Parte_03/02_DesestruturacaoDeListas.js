// Desestrutução de Listas:

// Desta vez, pegamos o mesmo código, porém,
//refatorando e deixando-o mais "limpo".

// Para não ter que ficar colocando a Matriz "listaDeAlunosEMedias"
//o tempo todo, colocou-se esta matriz dentro de uma const um pouco
//diferente do normal.

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function procuraAluno(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`O aluno ${aluno} tem a média ${mediaDoAluno}.`)
    } else {
        console.log("Aluno não encontrado")
    }
}

procuraAluno("João");

// A aplicação ficou desta maneira: const [alunos,medias] =
//listaDeAlunosEMedias;

// Desta forma, sempre que for mencionado "alunos" ou "médias", automaticamente,
//estará se referindo a "listaDeAlunosEMedias". E como uma array,
//a posição que eles estão também possui indices, ou seja,
//aluno está no indice 0, enquanto, medias está no indice 1.

// Ainda que eu troque de posição estes dois, o código funcionará,
//mas se eu adiociono um novo elemento e o utilizo, sendo este
//indice 3, o código falhará pois dentro da Matriz "listaDeAlunosEMedias",
//só existem duas arrays.

//////////////////////////////////

// Também é possível utilizar a Destructuring para unir
//as arrays que estão dentro de uma Matriz.

const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosImpares, ...numerosPares];

console.log(numeros);

//////////////////////////////////

// Também é possível utilizar a Destructuring para diminuir o
//código e declarar mais de uma variável dentro de array e seus
//respectivos elementos.

const [num1, num2, ...num3] = [5, 10, 15, 30, 60];

console.log(num1, num2);

// O num3 que seria 15 não apareceu por que eu não o chamei
//através do console.log.

// Agora irei chamá-lo, porém com mais de um valor atribuído a ele.

console.log(num3);

/////////////////////////////////

// Pode-se também, fornecer um valor padrão. 

// Ambos precisam estar em colchetes.

const [nome1 = 'Ju'] = ["Juliana"];

console.log(nome1);

// Porém, se ele valor for removido, ele forncerá o valor padrão
//que nesse caso seria "Ju".

/////////////////////////////

// Se criarmos um Objeto e ao fechá-lo quisermos
//adicionar mais alguma valor dentro dele, pode ser feito
//da seguinte maneira:

const pessoa = {
    nome: "João",
    idade: 30
}

const PessoaComTelefone = {
    ...pessoa, telefone: 123123123}

console.log(pessoa, 
    PessoaComTelefone)

////////////////////////

// Também podemos chamar um valor que está dentro de um Objeto
//da seguinte maneira:

const objNome = pessoa.nome

// Ou

const { nome } = pessoa;

console.log(objNome);

console.log(nome);

////////////////////////

// Também podemos usar em funções.

function procuraDados({ nome, idade}) {
    console.log(nome, idade);
}

console.log(pessoa);