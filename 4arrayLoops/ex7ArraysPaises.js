//Crie um array de paises
const paises = ['Gana', 'Níger', 'Egito', 'Congo', 'Líbia'];
console.log(paises);

//Adiciona no final do array
paises.push('Mali');
console.log(paises);

//Remove o último
paises.pop();
console.log(paises);

//Adiciona no inicio do array
paises.unshift('Mali');
console.log(paises);

//Remove o primeiro
paises.shift();
console.log(paises);

//Último do array
const ultimo = paises[paises.length - 1];

console.log(ultimo);
//Segundo na tela
console.log(paises[1]);
//Índice 2 na tela
console.log(paises[2]);