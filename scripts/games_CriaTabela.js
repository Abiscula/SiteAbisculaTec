const recuperaDadosGame = (form) => {
    let game = {
        nome: form.nome.value,
        genero: form.genero.value,
        dev: form.dev.value,
        ano: form.ano.value
     }
     return game
}

const criaColuna = (valor) => {
    let gameTd = document.createElement('td')
    gameTd.textContent = valor
    
    return gameTd
}

const criaLinha = (game) => {
    let gameTr = document.createElement('tr')
    gameTr.appendChild(criaColuna(game.nome))
    gameTr.appendChild(criaColuna(game.genero))
    gameTr.appendChild(criaColuna(game.dev))
    gameTr.appendChild(criaColuna(game.ano))

    return gameTr
}


const botao = document.querySelector('.button-game')
botao.addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.querySelector('.form-games')

    //recupera dados do objeto game (criado a partir do form)
    let game = recuperaDadosGame(form)
    
    //Cria linha com as tds
    let gameTr = criaLinha(game)

    //recupera tabela
    let tabela = document.querySelector('.tabela-games')

    let erros = validaDados(game)
    if(erros.length > 0) {
        exibirMensagensDeErro(erros)
        return; // sai da função e não adiciona nada na tabela
    }

    //adiciona <tr> com as <td> na tabela
    tabela.appendChild(gameTr)
})