function imData(dia, mes, ano) {

    const diaFor = String(dia).padStart(2, "0");
    const mesFor = String(mes).padStart(2, "0");
    const anoFor = String(ano).padStart(4);
    console.log(`${diaFor}/${mesFor}/${anoFor}`);


}


imData(16, 1, 2021);