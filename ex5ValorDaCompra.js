const valorDaCompra = 100;

const numeroDeParcelas = 1;


if (numeroDeParcelas === 1) {

    const desconto = valorDaCompra * 10 / 100;
    const valorApagar = valorDaCompra - desconto;

    console.log(`Você deve pagar ${valorApagar} reais, à vista tem 10% desconto`);
}
else {

    const valorDaParcela = valorDaCompra / numeroDeParcelas;

    console.log(`Você deve pagar ${numeroDeParcelas} no valor ${valorDaParcela}`);

}