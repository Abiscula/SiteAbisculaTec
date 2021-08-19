let $ = document.querySelector.bind(document); //criando apelido

const botao = $('[data-button-login]')
botao.disabled = true //desabila botao

let formLogin = $('[data-form-conteudo]')

formLogin.senha.addEventListener('input', (senha) => {
    const cont_senha = $('[data-cont-senha]')
    let tamanho = senha.target.value.length
    cont_senha.innerText = `caracteres: ${tamanho}/8`
    if(tamanho < 8) {
        formLogin.senha.style.borderColor = '#FF0000'
        cont_senha.style.color = '#FF0000'
    } else {
        formLogin.senha.style.borderColor = '#008000'
        cont_senha.style.color = '#008000'
        botao.disabled = false
    }
})

class ModificadorDeConteudo {

    ocultaConteudo(event) {
        event.preventDefault()
        const conteudo = $('[data-form-conteudo]')
        conteudo.classList.add('oculta-display')
    }

    criaConteudo() {
        const logado = $('[data-logado]')
        const item = document.createElement('div')
        item.classList.add('div-login-js')

        let email = formLogin.email.value
        const texto = `<p class="p-js1"> Olá </p> <p class="p-js"><span class="span-js">${email}</span> <br> Seja bem vindo de volta! </p>`
        item.innerHTML = texto
        logado.appendChild(item)
    }

    alteraNoticia() {
        let titulo = $('[data-h1-header]')
        titulo.innerHTML = 'Nerd<span class="h1-tec">Tec</span>'

        let imagem1 = $('[data-img-section1]').src="./Imagens/imagem2.jpg"
        let h2 = $('[data-h2-section1]')
        h2.textContent = 'Apple: Os preços condizem com a qualidade?'
        let p = $('[data-p-section1]')
        p.textContent = 'Nossa querida maçã anunciou uma nova linha de produtos com visual ainda mais atraente, entretanto, não é somente o visual...'
    }
}

let modificadorDeConteudo = new ModificadorDeConteudo()

botao.addEventListener('click', modificadorDeConteudo.ocultaConteudo)
botao.addEventListener('click', modificadorDeConteudo.criaConteudo)
botao.addEventListener('click', modificadorDeConteudo.alteraNoticia)

