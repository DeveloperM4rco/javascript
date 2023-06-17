// função com parâmetro
function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!';
    } else {
        return 'Impar!';
    }
}
console.log(parImpar(4));

// função com parâmetros opcionais
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(7, 3));

// função dentro de uma variável
let v = function(x) {
    return x * 2;
}
console.log(v(3));

// função recursiva
function fatorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}
console.log(fatorial(5));