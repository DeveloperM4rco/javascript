let botao = document.querySelector(".botao");

botao.addEventListener('click', () => {
    let produto = String(prompt('Que produto você está comprando?'));
    let valor_produto = Number(prompt(`Quanto custa ${produto} que você está comprando?`));
    let valor_dado = Number(prompt(`Qual foi o valor dado para pagar ${produto}?`));
    let troco = valor_dado - valor_produto;

    let valor_produto_br = valor_produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let valor_dado_br = valor_dado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let troco_br = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    if (valor_dado < valor_produto) {
        let falta = valor_produto - valor_dado;
        let falta_br = falta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        alert(`${produto} custa ${valor_produto_br}.\nVocê deu ${valor_dado_br}, portanto, falta ${falta_br}.`);
    } else {
        alert(`Você comprou ${produto} que custou ${valor_produto_br}.\nDeu ${valor_dado_br} em dinheiro e vai receber ${troco_br} de troco.\nVolte Sempre!`)
    }
});