class TotalGames {

    constructor() {
        this.novoValor = 0
    }

    contandoGames(num=0) {
        let totGames = listaDeJogos.map(jogo => jogo);
        let valor = totGames.length + num
        let local = document.querySelector('#total-games')
        local.innerHTML = valor
    }

}

const totalGames = new TotalGames()
totalGames.contandoGames()