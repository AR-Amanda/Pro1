const carros = [{
    nome: "Hilux",
    marca: "Toyota",
    ano: 2022,
    cor: "Prata"

}, {
    nome: "Palio",
    marca: "Fiat",
    ano: 2015,
    cor: "Azul"

}, {
    nome: "Celta",
    marca: "Chevrolet",
    ano: 2018,
    cor: "Vermelho"

}]


const buscarCarro = (marca, carros) => {

    return carros.find((carros) => {
        return carros.marca === marca;

    });
}

const resultado = buscarCarro('Fiat', carros);

console.log(resultado);