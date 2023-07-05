let botao = document.querySelector(".botao");
let res = document.querySelector("#res");

botao.addEventListener('click', () => {
    let reais = Number(prompt('Quantos R$ você tem na carteira?'));
    let dolar = reais * 4.84;
    res.innerHTML = `${dolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`;
});