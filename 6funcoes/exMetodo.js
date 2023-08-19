const pessoaIni = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
    apresentar: function () {

        const faixa = this.faixaEtaria(this.idade);
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixa} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}!`);
    },

    faixaEtaria: function () {

        if (this.idade <= 21) {

            return "jovem";

        } else if (this.idade < 66) {

            return "adulto(a)";


        } else {

            return "Idoso(a)";
        }
    }
}
pessoaIni.apresentar();