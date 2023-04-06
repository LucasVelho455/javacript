function imprimirNome() {

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var exampleRadios = document.getElementById('exampleRadios').value
    var check = document.getElementsByClassName('check')
    var recebe = ''

    if (nome === '') {
        alert('Campo em Branco Nome')
    } else if (email === '') {
        alert('Campo em Branco Email')
    } else {
        for (i = 0; i < 2; i++) {
            if (check[i].checked === true) {
                recebe += check[i].value + ' '
            }
            if (recebe === '') {
                alert('Deseja selecionar apenas um ?')
            }
        }

        document.write(nome + ' ' + email + '' + exampleRadios + recebe)

    }
} 