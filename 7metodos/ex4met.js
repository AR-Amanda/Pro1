const nome = "jose messias junior";

const modificacao = nome.split(" ");
console.log(modificacao);

let nomeCerto = " ";

for (let i of modificacao) {
    let priLetra = i.slice(0, 1);
    let resNome = i.slice(1);

    nomeCerto += priLetra.toUpperCase() + resNome;

}
console.log(nomeCerto.trim());