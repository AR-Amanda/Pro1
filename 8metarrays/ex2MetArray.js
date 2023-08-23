function inventido(texto) {

    const arrayLetra = texto.split("");
    arrayLetra.reverse();

    let resultado = arrayLetra.join("");
    console.log(resultado);
}
inventido("Cubos Academy");