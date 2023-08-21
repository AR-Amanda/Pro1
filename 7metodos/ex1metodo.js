const valor = "97.50";

const alteracao = valor.replace(".", ",");

console.log(alteracao);


let numero = "1,350,000";

while (numero !== numero.replace(",", ".")) {

    numero = numero.replace(",", ".");
}

console.log(numero);


