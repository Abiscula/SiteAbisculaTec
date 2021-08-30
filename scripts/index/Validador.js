let $ = document.querySelector.bind(document); //criando apelido

const formLogin = $('[data-form-conteudo]')

class IndexValidador {

    constructor(formLogin) {
        this.senha = formLogin.senha
        this.countSenha = $('[data-cont-senha]')
        this.botaoLogin = $('[data-button-login]')
    }

    validaSenha() {
        let tamanho = this.senha.value.length
        this.countSenha.innerText = `caracteres: ${tamanho}/8`
        if(tamanho < 8) {
            this.senha.style.borderColor = '#FF0000'
            this.countSenha.style.color = '#FF0000'
        } else {
            this.senha.style.borderColor = '#008000'
            this.countSenha.style.color = '#008000'
            this.botaoLogin.disabled = false
        }
    }

    static liberarModificação(event) { //static permite o acesso deste metodo sem instanciar em outro arquivo.
        event.preventDefault()
        let modificador = new ModificadorDeConteudo() //cria a instancia para a class ModificadorDeConteudo()
    
        modificador.ocultaConteudo()
        modificador.criaConteudo()
        modificador.alteraNoticia()
    }
}

formLogin.addEventListener('input', () => {

    const indexValidador = new IndexValidador(formLogin)

    indexValidador.validaSenha()
})