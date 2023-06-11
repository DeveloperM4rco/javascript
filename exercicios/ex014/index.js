function carregar() {
    var msg = document.querySelector("#msg");
    var img = document.querySelector("#imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Mensagem de bom dia
        img.src = 'images/manha.png'
        document.body.style.background = '#ff984f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        document.body.style.background = '#71432b';
    } else {
        img.src = 'images/noite.png'
        document.body.style.background = '#1b2431'
    }
}