function tabuada(){
     var num = window.document.getElementById('num')
     var end = window.document.getElementById('end')
     if(num.value.length == 0 || end.value.length == 0 ){
        window.alert('[ERRO] confira os seus dados')
     } else{
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var resp = window.document.getElementById('resposta')
        resp.innerHTML = `A tabuada do ${n} é: <br>`
        do{
           r = n * x
           resp.innerHTML += `${x} x ${n} = ${r} <br>`
           x++
   
        } while(x <= e )
     }
     }