class GameValidador extends Game {
    constructor(nome, genero) {
        super(nome, genero)
        this.ul = $('.local-erros')
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
        this.ul.innerHTML = '' //limpando erro
        erros.forEach((erro) => {
            let li = document.createElement('li')
            li.textContent = erro
            li.classList.add('li-erro')
            this.ul.appendChild(li)
        })
    }
}