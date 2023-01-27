let jogador = {
    nome: 'Neymar',
    idade: 30,
    numGol: 600,
    Gol(g = 0){
        console.log('Neymar marcou gol')
        this.numGol += g 
    }
}

console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol(4)
console.log(jogador.numGol)

jogador.posicao = 'Meio Campo'
console.log(jogador)

delete jogador.idade
console.log(jogador)