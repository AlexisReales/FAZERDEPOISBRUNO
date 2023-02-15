function calc(){
    let c = Number(document.getElementById('n1').value)
    let i = Number(document.getElementById('n2').value)
    let n = Number(document.getElementById('n3').value)

    if(n == 1){
        n == 365
    }else if(n == 2){
     n == 365 * 2   
    }

    let calculo = c * (1+i) ** n
    
    console.log(calculo)
    document.getElementById('resposta').value = calculo.toFixed(2)
}