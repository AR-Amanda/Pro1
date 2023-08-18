const pessoaIni = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4
}


function faixaEtaria(idade) {
    if (idade <= 21) {

        return "jovem";

    } else if (idade < 66) {

        return "adulto(a)";


    } else {

        return "Idoso(a)";
    }
}


function pessoaFrase(pessoa) {

    const faixa = faixaEtaria(pessoa.idade);
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixa} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}!`);

}

pessoaFrase(pessoaIni);
