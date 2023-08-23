const usuarios = [{
    nome: "Maria",
    idade: 24,

}, {
    nome: "João",
    idade: 26,
}, {
    nome: "Fernando",
    idade: 38,
}, {
    nome: "Julia",
    idade: 21,
}, {
    nome: "Jaqueline",
    idade: 31,
}]

const fiscalizarFesta = (usuarios) => {

    const resultado = usuarios.every((objeto) => {


        return objeto.idade > 17

    });

    if (resultado) {
        console.log('Festa liberada');
    }
    else {

        console.log('Possui menor de idade');
    }
}

fiscalizarFesta(usuarios);