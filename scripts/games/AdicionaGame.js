let $ = document.querySelector.bind(document); //criando apelido

class Game {
    constructor(form) {
        this.form = form
        this.nome = form.nome.value
        this.genero = form.genero.value
        this.dev = form.dev.value
        this.ano = form.ano.value
        this.tabela = $('.tabela-games')
    }

    criaColuna(valor, classe)  { //cria coluna <td>
        let gameTd = document.createElement('td')
        gameTd.textContent = valor
        gameTd.classList.add(classe)
        
        return gameTd
    }

    criaLinha() { //Cria linha <tr> com as <td>
        let gameTr = document.createElement('tr')
        gameTr.classList.add('jogo')

        gameTr.appendChild(this.criaColuna(this.nome, 'nome-game'))
        gameTr.appendChild(this.criaColuna(this.genero, 'genero-game'))
        gameTr.appendChild(this.criaColuna(this.dev, 'dev-game'))
        gameTr.appendChild(this.criaColuna(this.ano, 'ano-game'))

        return gameTr
    }

    adicionaNaTabela() { //adiciona <tr> na <table>
        this.tabela.appendChild(this.criaLinha())
    }

    limpaForm() {
        this.form.reset()
        $('.local-erros').innerHTML = '' //limpa erro
    }
}

const botaoGame = $('.button-game').addEventListener('click', (event) => {
    event.preventDefault()
    let form = $('.form-games')

    let game = new Game(form)

    let gameValidador = new GameValidador(form)

    let erros = gameValidador.validaDados()

    if(erros.length > 0) {
        gameValidador.exibirMensagensDeErro(erros)
        return; //sai da função
    }
    
    game.adicionaNaTabela()

    totalGames.contandoGames(++totalGames.novoValor)

    game.limpaForm()
})