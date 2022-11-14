// Uso do método includes():

// Este método é usado para saber se determinada array possui
//determinado elemento.

// Isso pode ser demonstrado com o exercício de busca de nome
//do aluno, a seguir:

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function procuraAluno(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`o aluno ${aluno} tem a média ${mediaDoAluno}.`)
    } else {
        console.log("Aluno não encontrado")
    }
}

procuraAluno("João");

// O código também foi implementado para não só determinar
//a busca do aluno em si, mas também utilizou Matrizes e o
//método indexOf para guardar o indice do aluno em questão e
//utilizá-la como meio para descobrir a sua média.