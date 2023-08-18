//exer 1

function p(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}!`);
}

p(pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "atriz",
    altura: 1.67
})