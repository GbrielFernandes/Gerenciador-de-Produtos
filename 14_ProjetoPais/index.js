document.getElementById('card').style.setProperty('display','none','important')

function Procurar(){
    document.getElementById('card').style.setProperty('display','block','important')
    let pais = document.getElementById('pais').value
    let finalurl = `https://restcountries.com/v2/name/${pais}?fullText=true`
    console.log(finalurl)
    fetch(finalurl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].population)
        console.log(data[0].capital)
        console.log(data[0].region)

        let bandeira = document.getElementById('bandeira')
        let nome = document.getElementById('nome')
        let capital = document.getElementById('capital')
        let pop = document.getElementById('pop')
        let cont = document.getElementById('cont')

        nome.innerHTML = pais
        capital.innerHTML = data[0].capital
        cont.innerHTML = data[0].region
        pop.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg
    
    })
}