function gerar_tabuada() {
    let num = document.querySelector("#txtnum");
    let tab = document.querySelector("#seltab");
    if (num.value.length == 0) {
        alert('Digite um número');
    } else {
        let n = Number(num.value);
        let c = 1;
        // limpando todo o select
        tab.innerHTML = '';
        while (c <= 10) {
            // criar um elemento option
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            // adicionando filhos para o select
            tab.appendChild(item);
            item.value = `tab${c}`;
            c++;
        }
    }
    
}