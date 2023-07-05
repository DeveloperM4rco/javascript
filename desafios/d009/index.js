let botao = document.querySelector(".botao");
let res = document.querySelector("#res");

botao.addEventListener('click', () => {
    let nome = prompt('Qual é o nome do funcionário?');
    let salario = Number(prompt(`Qual é o salário de ${nome}?`));
    let valor_ajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`));
    let salario_ajuste = (salario * valor_ajuste / 100) + salario

    res.innerHTML = `<strong>${nome} recebeu um aumento salarial!</strong>.`;
    res.innerHTML += `<p>O salário era de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`;
    res.innerHTML += `<p>Com um aumento de ${valor_ajuste}%, o salário vai aumentar ${(salario * valor_ajuste / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`;
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${salario_ajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
});