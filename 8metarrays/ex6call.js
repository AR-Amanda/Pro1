const programas = ["imagem.psd", "inst.bat", "musica.aac", "video.avi", "arquivo.doc", "foto.png"];

const antiVirus = (programas) => {
    const resultado = programas.some((programa) => {

        const extensao = programa.indexOf('.bat');

        return extensao != -1;


    });
    if (resultado) {
        console.log('virus detectado');

    } else {
        console.log('nenhum virus encontrado');

    }
}
antiVirus(programas);

