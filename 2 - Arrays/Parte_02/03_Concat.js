// Uso do método concat():

// Serve para concatenar arrays.

// É simples de ser usado, porém, necessita de uma nova
//array para armanezar a concatenação.

// Imaginando duas salas, uma para JavaScript e outra para Python
//deseja-se unificá-las.

// Então, podemos resolver esta situação desta maneira:

const salaJS = ["Rodolfo", "Rodrigo", "Rochedo"];
console.log("Sala JavaScript: ")
console.log(salaJS);
console.log(" ");

const salaPython = ["Pleno", "Plinio", "Plebio"];
console.log("Sala Python: ")
console.log(salaPython);
console.log(" ");

const salaUnificadas = salaJS.concat(salaPython);
console.log("Uso do concat() para concatenar as duas arrays de salas: ")
console.log(salaUnificadas);
console.log(" ");

