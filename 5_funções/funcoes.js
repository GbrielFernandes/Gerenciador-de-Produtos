function presente (dinheiro,valor){
    if (dinheiro < valor) {
        return 'Não vai dar para comprar...'
    } else{
        return 'Você realmete precisa fazer essa comprar?'
    }
}

let x  = presente (100,90)
console.log(x)
