let $ = document.querySelector.bind(document)

class ValidadorDeFormulario {
    constructor(formularioContato) {
        this.form = formularioContato
        this.div = $('.div-formulario-cadastro')
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
        let ul = $('.local-erros')
        ul.innerHTML = '' //limpando erro
        erros.forEach(erro => {
            let li = document.createElement('li')
            li.textContent = erro
            li.classList.add('li-erro')
            ul.appendChild(li)
        })
    }

    ocultaDisplay() {
        this.div.classList.add('oculta-display')
    }

    novoDisplay() {
        let criandoDiv = document.createElement('div')
        criandoDiv.classList.add('div-formulario-cadastro')

        let conteudoDisplay = document.createElement('span')
        conteudoDisplay.innerText = 'Cadastro realizado com sucesso!'
        conteudoDisplay.classList.add('cadastro-realizado')

        let conteudoDisplay2 = document.createElement('span')
        conteudoDisplay2.innerText = 'Redirecionando em:'
        conteudoDisplay2.classList.add('cadastro-realizado')

        let timer = document.createElement('span')
        timer.classList.add('timer')

        criandoDiv.appendChild(conteudoDisplay)
        criandoDiv.appendChild(conteudoDisplay2)
        criandoDiv.appendChild(timer)
        this.form.appendChild(criandoDiv)
    }

    contadorRegressivo(duration, display) {
        let timer = duration, minutes, seconds

        setInterval(() => {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            display.textContent = `${minutes}:${seconds}`

            if(--timer == 0) {
                window.location.href ='./index.html'
            }

        }, 1000);
    }

    displayDuration() {
        let duration = 5
        let display = $('.timer')

        this.contadorRegressivo(duration, display)
    }
}

let botaoCadastro = $('#botao-cadastro')
botaoCadastro.addEventListener('click', (event) => {
    event.preventDefault()
    let formularioContato = $('.formulario-cadastro')

    let validadorDeFormulario = new ValidadorDeFormulario(formularioContato)

    let erros = validadorDeFormulario.validaDados()
    if(erros.length > 0) {
        validadorDeFormulario.exibirDadosInvalidos(erros)
        return;
    }

    validadorDeFormulario.ocultaDisplay()
    validadorDeFormulario.novoDisplay()
    validadorDeFormulario.displayDuration()
})


