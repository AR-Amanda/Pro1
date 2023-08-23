const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];


function filtro(dados) {
    const star = Math.round(dados.length * 10 / 100);
    const end = Math.floor(dados.length * 90 / 100);

    const fatia = dados.slice(star, end);
    console.log(fatia);
}

filtro(dados);