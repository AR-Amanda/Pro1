//Crie um array de paises
const paises = ['Gana', 'Níger', 'Egito', 'Congo', 'Líbia'];

//Adiciona no final do array
paises.push('Mali');

//Remove o último
paises.pop();

//Adiciona no inicio do array
paises.unshift('Mali');

//Remove o primeiro
paises.shift();

//Último do array
const ultimo = paises[paises.length - 1];

console.log(paises);

console.log(ultimo);
//Segundo na tela
console.log(paises[1]);
//Índice 2 na tela
console.log(paises[2]);