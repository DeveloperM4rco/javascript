let valores = [8, 1, 7, 4, 2, 9];

// mostrando os valores com for
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);

}
console.log('\n');

// mostrando os valores com forin
for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);

}
console.log('\n');

// mostrando com while
let i = 0;
while (i < valores.length) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
    i++;
}
console.log('\n');

// mostrando com dowhile
do {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
    i++;
} while (i < valores.length);
console.log('\n');