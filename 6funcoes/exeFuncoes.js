//exer 1

const c = {
    nome: "Maria",
    idade: 30,
    profissao: "atriz",
    altura: 1.67
}

function pessoaFrase(pessoa) {
    console.log(`Olá! Meu nome é ${c.nome}, sou um jovem de ${c.idade} anos, ${c.altura} de altura e sou ${c.profissao}!`);
}

pessoaFrase(c);


//exer 2


function faixaEtaria(idade) {
    if (idade <= 21) {

        return "jovem";

    } else if (idade < 66) {

        return "adulto(a)";


    } else {

        return "Idoso(a)";
    }
}

console.log(faixaEtaria(16));

