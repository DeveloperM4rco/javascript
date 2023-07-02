let botao = document.querySelector(".botao");

botao.addEventListener('click', numero);

function numero() {
    let num = Number(prompt('Digite um número inteiro qualquer'));
    alert(`Antes de ${num}, temos ${num - 1}\nDepois de ${num} temos ${num + 1}`);
}