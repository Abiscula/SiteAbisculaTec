class ModificadorDeConteudo {

    constructor() {
        this.conteudo = $('[data-form-conteudo]')
        this.logado = $('[data-logado]')
        this.titulo = $('[data-h1-header]')
        this.imagemSection = $('[data-img-section1]')
        this.h2Section = $('[data-h2-section1]')
        this.pSection = $('[data-p-section1]')
    }

    ocultaConteudo() {
        this.conteudo.classList.add('oculta-display')
    }

    criaConteudo() {
        const item = document.createElement('div')
        item.classList.add('div-login-js')

        item.innerHTML =  `<p class="p-js1"> Olá </p> <p class="p-js"><span class="span-email-login">${formLogin.email.value}</span> <br> Seja bem vindo de volta! </p>`
        this.logado.appendChild(item)
    }

    alteraNoticia() {
        this.titulo.innerHTML = 'Nerd<span class="h1-tec">Tec</span>'
        this.imagemSection.src="./Imagens/imagem2.jpg"
        this.h2Section.textContent = 'Apple: Os preços condizem com a qualidade?'
        this.pSection.textContent = 'Nossa querida maçã anunciou uma nova linha de produtos com visual ainda mais atraente, entretanto, não é somente o visual...'
    }
}

formLogin.addEventListener('submit', IndexValidador.liberarModificação)