const validaDados = (game) => {
    let invalido = []
    if(game.nome.length == 0) {
        invalido.push('[ERRO] O nome do jogo é um campo obrigatório')
    }
    if(game.genero.length == 0) {
        invalido.push('[ERRO] O gênero do jogo é um campo obrigatório')
    }
    return invalido
}


function exibirMensagensDeErro(erros) {
    let ul = document.querySelector('.local-erros')
    ul.innerHTML = '' //limpando erro
    erros.forEach((erro) => {
        let li = document.createElement('li')
        li.textContent = erro
        li.classList.add('li-erro')
        ul.appendChild(li)
    })
}