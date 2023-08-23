function inventido(texto) {

    const arrayLetra = texto.split("");
    arrayLetra.reverse();

    let textiInve = "";

    for (let letra of arrayLetra) {
        textiInve = textiInve + letra;
    }
    console.log(textiInve);
}
inventido("Cubos Academy");