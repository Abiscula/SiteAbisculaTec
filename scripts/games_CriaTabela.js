class Game {
    constructor(form) {
        this.nome = form.nome.value
        this.genero = form.genero.value
        this.dev = form.dev.value
        this.ano = form.ano.value
    }

    criaColuna(valor, classe)  {
        let gameTd = document.createElement('td')
        gameTd.textContent = valor
        gameTd.classList.add(classe)
        
        return gameTd
    }

    criaLinha() {
        let gameTr = document.createElement('tr')
        gameTr.classList.add('jogo')

        gameTr.appendChild(this.criaColuna(this.nome, 'nome-game'))
        gameTr.appendChild(this.criaColuna(this.genero, 'genero-game'))
        gameTr.appendChild(this.criaColuna(this.dev, 'dev-game'))
        gameTr.appendChild(this.criaColuna(this.ano, 'ano-game'))

        return gameTr
    }
}


const botao = document.querySelector('.button-game')
botao.addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.querySelector('.form-games')

    //recupera dados do objeto game (criado a partir do form)
    let game = new Game(form)
    
    //Cria linha com as tds
    let gameTr = game.criaLinha()

    //recupera tabela
    let tabela = document.querySelector('.tabela-games')

    let erros = validaDados(game)
    if(erros.length > 0) {
        exibirMensagensDeErro(erros)
        return; // sai da função e não adiciona nada na tabela
    }

    //adiciona <tr> com as <td> na tabela
    tabela.appendChild(gameTr)
    form.reset() //limpa form
    document.querySelector('.local-erros').innerHTML = '' //limpa erro
})