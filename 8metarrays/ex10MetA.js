//exer1
const usuarios = [
    { id: 21, nome: 'joao', idade: 33 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 },

];

usuarios.sort((primeiro, segundo) => {
    return primeiro.id - segundo.id;
});
console.log(usuarios);

usuarios.sort((primeiro, segundo) => {
    return segundo.id - primeiro.id;
});

console.log(usuarios);


//exer3

const idadeMaior = usuarios.reduce((acumulador, elemento) => {
    let maior = acumulador;
    if (elemento.idade > maior.idade) {
        maior = elemento;

    }
    return maior;

});

console.log(idadeMaior);
