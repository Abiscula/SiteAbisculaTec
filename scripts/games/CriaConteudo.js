class CriaConteudo {

    static template() {
        let criandoConteudo = document.querySelector('.tabela-games')
        let conteudoDinamico = listaDeJogos.map(jogo => `
            <tr class="jogo">
                <td class="nome-game">${jogo.nome}</td>
                <td class="genero-game">${jogo.genero}</td>
                <td class="dev-game">${jogo.dev}</td>
                <td class="ano-game">${jogo.ano}</td>
            </tr>
        `).join('')
        criandoConteudo.innerHTML = conteudoDinamico
     }
 }

CriaConteudo.template()