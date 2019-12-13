function maior(){
    let cont=0, total=0
    let valor_digitado

    while(cont<5){
        valor_digitado = prompt("Digite uma nota")
        if(valor_digitado>total){
            total = Number(valor_digitado)
        }
        cont++
    }
    alert(total)
}
maior()