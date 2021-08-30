import {ModificadorContato} from "../Modificador.js"


class ValidadorDeFormulario {
    constructor(formularioContato) {
        this.nome = formularioContato.nome.value
        this.email = formularioContato.email.value
        this.senha = formularioContato.senha.value
    }

    validaDados() {
        let dadosInvalidos = []
        if(this.nome.length == 0) {
            dadosInvalidos.push('ERRO - Nome é um dado obrigatório')
        }
        if(this.email.length == 0) {
            dadosInvalidos.push('ERRO - Email é um dado obrigatório')
        }
        if(this.senha.length == 0) {
            dadosInvalidos.push('ERRO - Senha é um dado obrigatório')
        }
        return dadosInvalidos
    }

    exibirDadosInvalidos(erros) { //exibe a mensagem de erro
        let ul = document.querySelector('.local-erros')
        ul.innerHTML = '' //limpando erro
        erros.forEach(erro => {
            let li = document.createElement('li')
            li.textContent = erro
            li.classList.add('li-erro')
            ul.appendChild(li)
        })
    }
}

const botaoCadastro = document.querySelector('#botao-cadastro')
botaoCadastro.addEventListener('click', (event) => {
    event.preventDefault()
    let formularioContato = document.querySelector('.formulario-cadastro')

    let validadorDeFormulario = new ValidadorDeFormulario(formularioContato)

    let erros = validadorDeFormulario.validaDados()
    if(erros.length > 0) {
        validadorDeFormulario.exibirDadosInvalidos(erros)
        return;
    }

    const modificadorContato = new ModificadorContato(formularioContato)
    modificadorContato.novoDisplay()
    modificadorContato.criaContador()
})


