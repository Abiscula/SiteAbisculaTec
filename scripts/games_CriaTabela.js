let $ = document.querySelector.bind(document); //criando apelido

class Game {
    constructor(form) {
        this.nome = form.nome.value
        this.genero = form.genero.value
        this.dev = form.dev.value
        this.ano = form.ano.value
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

    validaDados() { //faz a validação dos dados
        let invalido = []
        if(this.nome.length == 0) {
            invalido.push('[ERRO] O nome do jogo é um campo obrigatório')
        }
        if(this.genero.length == 0) {
            invalido.push('[ERRO] O gênero do jogo é um campo obrigatório')
        }
        return invalido
    }

    exibirMensagensDeErro(erros) { //exibe a mensagem de erro
        let ul = $('.local-erros')
        ul.innerHTML = '' //limpando erro
        erros.forEach((erro) => {
            let li = document.createElement('li')
            li.textContent = erro
            li.classList.add('li-erro')
            ul.appendChild(li)
        })
    }

    adicionaNaTabela(gameTr) { //adiciona <tr> na <table>
        let tabela = $('.tabela-games')
        tabela.appendChild(gameTr)
    }

}


const botao = $('.button-game')
botao.addEventListener('click', (event) => {
    event.preventDefault()
    let form = $('.form-games')

    //recupera dados do objeto game (criado a partir do form)
    let game = new Game(form)
    
    let gameTr = game.criaLinha()

    let erros = game.validaDados()
    if(erros.length > 0) {
        game.exibirMensagensDeErro(erros)
        return; // sai da função e não adiciona nada na tabela
    }

    game.adicionaNaTabela(gameTr)
    form.reset() //limpa form
    document.querySelector('.local-erros').innerHTML = '' //limpa erro
})