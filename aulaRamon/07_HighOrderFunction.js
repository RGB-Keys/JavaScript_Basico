// Com base no exercício anteior:

// Percebeu-se que após a refatoração do código, uma mesma função acabou executando duas tarefas.
//Porém, através do conceito Higher Order Functions, podemos compor funções para separar tarefas diferentes.

// Desta forma, podemos criar uma função de acesso qeu vai cuidar da visualização do resultado e outra que vai ficar responsável pela lógica:

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return acesso(nome);
}

usuarioLogin("Luke");

// Como as duas funções estáo no mesmo escopo global, a função usuarioLogin()
//consegue acessar a função acesso().

//Assim, funções com responsabilidades diferentes são geradas dentro de outras funções
//e o valor de retorno da função usuarioLogin() é outra função, acesso().

// A função usuarioLogin() ficou responsável pela lógica, enquanto, acesso() pela visualização.
//O conceito de Higher Order Function foi muito bem utilizado, pois ele visa melhor compor nosso sistema.


// MAS E SE QUISERMOS ADICIONAR OUTRO CARGO, COMO UMA DIRETORA, POR EXEMPLO?

// Inicialmente, poderíamos pensar em apenas duplicar o código, porém com um maior número de vericações.
// Ficaria assim:

const acessou = (nome) => {
    return `${nome} logou com sucesso no sistema`
}

const usuarioLogin1 = (nome) => { 
    let array = [];
    for (i = 0; i < 90000; i++) {
        array.push(i);
    }
    return acessou(nome);
}

const diretoriaLogin = (nome) => { 
    let array = [];
    for (i = 0; i < 900000; i++) {
        array.push(i);
    }
    return acessou(nome);
}

diretoriaLogin("Leia");

// Feito!
// Mas temos um problema, entramos mais uma vez no conceito de DRY.
//Então, podemos refatorar todo este código, para que ao invés de duas funções de login, façamos apenas uma.

const access = (name, job) => {
    return `Nome: ${name}, Ocupação: ${job}. Logou com sucesso no sistema!`
}

const autentication = (job) => {
    let array = [];
    for (i = 0; i < job; i++) {
        array.push(i);
    }
    return true;
}

const login = (person, autentication) => {
    if(person.job === `Funcionario`) {
        autentication(90000);
    } else if(person.job === `Diretoria`) {
        autentication(900000);
    } 
    return access(person.name, person.job);
}

console.log(login({job: `Diretoria`, name: `Rodolfo`}, autentication))
console.log(" ")
console.log(login({job: `Funcionario`, name: `Tomas`}, autentication))

// Neste caso, vemos que a função existente em cada login passou para autentica();
//Onde defini-se o tempo de verificação.

// Foi feito apenas um login(), porém com parâmetros que dividem que tipo de usuário
//está acessando o sistema. E através dessa função, as outras são acionadas.

// No final foi posto console.log() para conferir se estava funcionando, mas não é necessário.

// Agora além de retornar uma função,também passamos outra função como argumento que por sua vez,
//vai ser chamada e receber seus próprios argumentos a partir de dados que existem dentro da função “mais alta” na ordem - ou seja, em “higher order”.

// Esse é o poder das higher order functions: permitir a composição de funções e 
//deixar nosso código mais organizado e genérico para receber diversos tipos de interações.

// MAIS INFORMAÇÕES:

// * - A higher order function login compara o valor da chave cargo no if...else
// e executa a função autentica passando como parâmetro o valor 900000 pois pessoa.cargo === ‘diretoria’;

// * - A função autentica é executada e o valor 900000 é utilizado no loop for.
// Uma vez iniciado o loop, o JavaScript só continua a executar as outras linhas da função após o término da iteração.

// * - Com o término do loop, a função autentica executa sua última linha e vai retornar true.
// Esse valor é passado de volta para a função autentica, que continua seu fluxo normal até a última linha,
// na qual chama a função acesso passando como parâmetro o valor da chave nome e recebendo de volta o retorno de acesso,
// uma string com o texto ”Leia logou com sucesso no sistema!”

// * - As funções acesso e autentica são “chamadas de volta” (ou, em inglês, called back) pela função login;
// esse tipo de função é chamada de “função callback”,
// sendo a função login a de ordem maior na hierarquia, ou seja, a ”higher order function.



// CONCLUSÃO:

// * - High order functions são funções que recebem uma função ou mais como argumento, retornando outra função;

// * - Isso permite a composição de funções, ou seja, ter funções pequenas que compõem outras funções maiores;

// * - Funções que são chamadas dentro de outra são chamadas callback functions,
// pois são “called back” (“chamadas de volta” em uma tradução livre) dentro da função onde estão compostas.