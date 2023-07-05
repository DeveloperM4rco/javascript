let botao = document.querySelector(".botao");
let res = document.querySelector("#res");

botao.addEventListener('click', () => {
    let produto = prompt('Qual é o produto comprado?');
    let valor_produto = Number(prompt(`Qual é o preço de ${produto}?`));

    res.innerHTML = `<strong>Calculando o desconto de 10% para ${produto}</strong>`;
    res.innerHTML += `<p>O valor de ${produto} era de ${valor_produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`;
    res.innerHTML += `<p>Você acaba de ganhar ${(valor_produto * 10 / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).`;
    res.innerHTML += `<p>No fim, você vai pagar ${(valor_produto - (valor_produto * 10 / 100)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto}.`;
});