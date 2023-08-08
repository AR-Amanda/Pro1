const valorDaCompra = 100;

const numeroDeParcelas = 10;


if (numeroDeParcelas === 1) {

    const desconto = valorDaCompra * 10 / 100;
    const valorApagar = valorDaCompra - desconto;

    console.log(`Você deve pagar ${valorApagar} reais, à vista tem 10% desconto`);
}
else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {

    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);

    console.log(`Você deve pagar ${numeroDeParcelas} no valor ${valorDaParcela} reais, sem juros`);

}
else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {

    const valorJuros = valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas;

    const valorDaParcela = (valorJuros / numeroDeParcelas).toFixed(2);

    console.log(`Você deve pagar ${numeroDeParcelas} no valor ${valorDaParcela} reais, com juros`);

}
else {
    console.log("Total de parcelas inválida.");
}