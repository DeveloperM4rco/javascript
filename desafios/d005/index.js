let botao = document.querySelector(".botao");
let res = document.querySelector("#res");

botao.addEventListener('click', () => {
    let dist = prompt('Digite uma distância em metros (m)');
    res.innerHTML = `<strong>A distância ${dist} metros corresponde a...</strong>`
    res.innerHTML += `<p>${(dist / 1000).toFixed(3)} quilomêtros (Km).</p>`
    res.innerHTML += `<p>${(dist / 100).toFixed(3)} hectômetros (Hm).</p>`
    res.innerHTML += `<p>${(dist / 10).toFixed(3)} decâmetros (Dam).</p>`
    res.innerHTML += `<p>${(dist * 10).toFixed(3)} decímetros (dm).</p>`
    res.innerHTML += `<p>${(dist * 100).toFixed(3)} centímetros (cm).</p>`
    res.innerHTML += `<p>${(dist * 100).toFixed(3)} milímetros (dm).</p>`
});