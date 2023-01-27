class jogador {
    constructor(nome,posicao,numGols){
        this.nome = nome
        this.posicao = posicao
        this.numGols = numGols
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGols} em sua carreira`)
    }
}

const Neymar = new jogador('Neymar','Atacante', 400)
Neymar.golsMarcados()
const Messi = new jogador('Messi','Atacante',800)
Messi.golsMarcados()