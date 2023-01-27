const dias = document.getElementById('dias') 
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')



const lancamento = '01 oct 2023'

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date ()

    const segTotal = (dataLanc - hoje)/1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal /60) % 60
    const finalSegundos = Math.floor(segTotal) %60

    dias.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    min.innerHTML = formatoTempo(finalMinutos)
    seg.innerHTML = formatoTempo(finalSegundos)
}


function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)