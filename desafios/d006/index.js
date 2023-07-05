let botao = document.querySelector(".botao");
let res = document.querySelector("#res");

botao.addEventListener('click', () => {
    let num = Number(prompt('Digite a temperatura em ºC (Celsius)'));
    res.innerHTML = `<strong>A temperatura de ${num}ºC, corresponde a...</strong>`
    res.innerHTML += `<p>${(num + 273).toFixed(2)}ºK (Kelvin).</p>`
    res.innerHTML += `<p>${(num * 1.8 + 32).toFixed(2)}ºF (Fahrenheit).</p>`
});