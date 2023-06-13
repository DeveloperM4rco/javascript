var cont = document.querySelector("#contar");

cont.addEventListener('click', contar);

function contar() {
    let inicio = document.querySelector("#inicio");
    let fim = document.querySelector("#fim");
    let passo = document.querySelector("#passo");
    let res = document.querySelector("#res");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        alert('[ERRO] confira os dados');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            alert('Passo inválido! Considerando o passo 1');
            p = 1;
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;

            }
        } else {
            // contagem decrescente
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`;
                
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}