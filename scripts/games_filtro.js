const inputFiltro = $('#games-filtro')

inputFiltro.addEventListener('input', function()  {
    let jogos = document.querySelectorAll('.jogo')
    jogos.forEach(jogo => {
        let nomeJogo = jogo.querySelector('.nome-game').textContent
        let nomeDigitado = new RegExp(inputFiltro.value, 'i')
        if(nomeDigitado.test(nomeJogo)) {
            jogo.classList.remove('oculta-display')
        } else if (inputFiltro.value.length == 0) {
            jogo.classList.remove('oculta-display')
        } else {
            jogo.classList.add('oculta-display')
        }
    })
})