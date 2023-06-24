let num = document.querySelector("#number");
let lista = document.querySelector("#lista");
let res = document.querySelector("#res");
let valores = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    // mantém o foco do cursor
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let i in valores) {
            soma += valores[i];
            if (valores[i] > maior) {
                maior = valores[i];
            } else {
                menor = valores[i]
            }
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} valores <strong>cadastrados.</strong></p>`;
        res.innerHTML += `<p>O <strong>maior</strong> valor adicionado foi ${maior}.</p>`;
        res.innerHTML += `<p>O <strong>menor</strong> valor adicionado foi ${menor}.</p>`;
        res.innerHTML += `<p>A <strong>soma</strong> dos valores é ${soma}.</p>`;
        res.innerHTML += `<p>A <strong>média</strong> dos valores é ${media}.</p>`;
    }
}