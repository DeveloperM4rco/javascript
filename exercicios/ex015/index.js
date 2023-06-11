function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var ano_form = document.querySelector("#txtano");
    var res = document.querySelector("#res");

    if (Number(ano_form.value.length) == 0 || Number(ano_form.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var sexo_form = document.querySelectorAll("[name='radsex']");
        var idade = ano - Number(ano_form.value);
        var genero = '';
        // Criando um novo elemento para o documento HTML
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo_form[0].checked) {
            genero = 'masculino';
            if (idade >= 0 && idade < 10) {
                // Criança
                // Dando atributos ou parâmetros com valores
                img.setAttribute('src', 'images/crianca-m.png');
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'images/jovem-m.png');
            } else if (idade >= 18 && idade < 65) {
                // Adulto
                img.setAttribute('src', 'images/adulto-m.png');
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-m.png');
            }

        } else if (sexo_form[1].checked) {
            genero = 'feminio';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/crianca-f.png');
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'images/jovem-f.png');
            } else if (idade >= 18 & idade < 60) {
                img.setAttribute('src', 'images/adulto-f.png');
            } else {
                img.setAttribute('src', 'images/idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        // Criando um novo filho para o elemento do HTML
        res.appendChild(img);
    }
}