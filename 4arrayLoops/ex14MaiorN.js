const numero = [1, 21, 7, 3, 73, 298, 55, 67, 5, 98];

let maior = 0;

for (let i = 0; i < numero.length; i++) {

    if (numero[i] > maior) {
        maior = numero[i];

    }

}
console.log(maior);