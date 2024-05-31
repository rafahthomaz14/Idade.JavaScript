function verificar() {
    var txt1 = document.getElementById('txt1');
    var res = document.getElementById('res');
    var card = document.getElementById('card');

    var idade = parseInt(txt1.value);
    res.innerHTML = '<br>Resultado: ';

    if (idade >= 18) {
        res.innerHTML += 'Você pode beber!';
        card.style.background = 'green';
    } else {
        res.innerHTML += 'Você <strong>NÃO</strong> pode Beber';
        card.style.background = 'red';
    }
}
