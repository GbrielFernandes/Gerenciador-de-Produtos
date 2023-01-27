function procurar(){
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v2/name/${pais}?fullText=true`
    console.log(finalURL)
}