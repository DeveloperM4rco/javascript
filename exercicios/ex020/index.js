// criando um vetor
let num = [2, 3, 5, 8, 9, 1];
console.log(num);

// adicionar um valor no indíce indicado
num[3] = 6;
console.log(`Nosso vetor é o ${num}`);

// adicionar mais um valor
num.push(7);
console.log(`Nosso vetor é o ${num}`);

// remove o último valor do vetor
num.pop();
console.log(`Nosso vetor é o ${num}`);

// remove o primeiro elemento do vetor
num.shift();
console.log(`Nosso vetor é o ${num}`);

// mostra a 1ª posição do elemento
let i = num.indexOf(9);
console.log(`O valor 9 está na posição ${i}`);
// OBS.: Se o valor mostrado no console for -1, o valor não existe no vetor

// ler a quantidade de valores dentro do vetor
console.log(`Existe ${num.length} elementos dentro do vetor`);

// os valores em ordem crescente
console.log(`O vetor em ordem crescente é ${num.sort()}`);