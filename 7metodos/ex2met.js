function replaceAltera(antigo, textoAntigo, textoNovo) {
    while (antigo != antigo.replace(textoAntigo, textoNovo)) {
        antigo = antigo.replace(textoAntigo, textoNovo);

    }
    return antigo;
}
let nume = "1,600,354";

console.log(replaceAltera(nume, ",", "."));