const jogador = function(nome,posicao,numGol){
    nome = nome,
    posicao = posicao,
    Gols = numGol

    this.getNome = function(){
        return nome
    }

    this.getPos = function(){
        return posicao
    }

    this.getGols = function(){
        return Gols
    }
}

const Neymar = new jogador('Neymar','Atacante',400)
console.log(Neymar.getNome())
const Messi = new jogador('Messi','Atacante',600)
console.log(Messi.getNome())