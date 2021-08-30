import {Contador} from "./Contador.js"

export class ModificadorContato {

    constructor(formularioContato) {
        this.form = formularioContato
        this.div = document.querySelector('.div-formulario-cadastro')
    }

    ocultaDisplay() {
        this.div.classList.add('oculta-display')
    }

    novoDisplay() {
        this.ocultaDisplay()
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

    criaContador() {
        const contador = new Contador()
        contador.contadorRegressivo()
    }
}