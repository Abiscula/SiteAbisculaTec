const botao = document.querySelector('[data-button-login]')
document.querySelector('[data-button-login]').disabled = true

const senha = document.querySelector('[data-login-senha]')
const email = document.querySelector('[data-login-email]')

email.addEventListener('input', (mail) => {
    let check_email = mail.target.value.length
    if(check_email >= 10) {
        senha.addEventListener('input', (txt) => {
            const cont_senha = document.querySelector('[data-cont-senha]')
            let tamanho = txt.target.value.length
            cont_senha.innerText = `caracteres: ${tamanho}/8`
            if(tamanho < 8) {
                senha.style.borderColor = '#FF0000'
                cont_senha.style.color = '#FF0000'
            } else {
                senha.style.borderColor = '#008000'
                cont_senha.style.color = '#008000'
                document.querySelector('[data-button-login]').disabled = false
            }
        })
    }
})

    //ocultando conteudo html
botao.addEventListener('click', (event) => {
    event.preventDefault(); //previne o recarregamento da página
    const conteudo = document.querySelector('[data-form-conteudo]')
    conteudo.classList.add('oculta-display') //oculta o conteudo da div
})



    //Criando conteudo html
botao.addEventListener('click', () => {
    const logado = document.querySelector('[data-logado]')
    const item = document.createElement('div') //cria um elemento html
    item.classList.add('div-login-js')

    let mail = email.value
    const texto = `<p class="p-js1"> Olá </p> <p class="p-js"><span class="span-js">${mail}</span> <br> Seja bem vindo de volta! </p>` //cria um texto
    item.innerHTML = texto
    logado.appendChild(item)
})


botao.addEventListener('click', () => {
    //Alterando titulo da página
    let titulo = document.querySelector('[data-h1-header]')
    titulo.innerHTML = 'Nerd<span class="h1-tec">Tec</span>'

    //alterando primeira noticia
    let imagem1 = document.querySelector('[data-img-section1]').src="./Imagens/imagem2.jpg"
    let h2 = document.querySelector('[data-h2-section1]')
    h2.textContent = 'Apple: Os preços condizem com a qualidade?'
    let p = document.querySelector('[data-p-section1]')
    p.textContent = 'Nossa querida maçã anunciou uma nova linha de produtos com visual ainda mais atraente, entretanto, não é somente o visual...'

})
