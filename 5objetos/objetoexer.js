//Exercicio 1

const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCnh: true,
    apelindo: ["JR", "Juninho"]
}
//Ternario
const t = (pessoa.temCnh ? "possui CNH" : "não possui CNH");

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${t} e os seguintes apelidos: `);
for (let item of pessoa.apelindo) {
    console.log(` - ${item}`);
}



//Exercicio 2
const cartao = {
    nomeCliente: "João",
    idadeCliente: 27,
    produtos:
        [["carne", "30 reais", "1kg"],
        ["figado", "18 reais", "1kg"],
        ["bife", "79 reais", "2kg"]

            // [{
            //     Nome: "pão",
            //     preco: 2000,
            //     quant: 6
            // },
            // {
            //     Nome: "café",
            //     preco: 8000,
            //     quant: 1
            //},
            // {
            //     Nome: "arroz",
            //    preco: 4800,
            //     quant: 9
            // }]
        ]

}
console.log(`${cartao.nomeCliente} de ${cartao.idadeCliente} anos, comprou: `);
for (let i of cartao.produtos) {
    console.log(` - ${i}`);
}
console.log(cartao);