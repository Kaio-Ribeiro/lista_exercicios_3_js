function media(){
    let cont=0, soma=0, parar=false
    let valor_digitado

    while(!parar){
        valor_digitado = prompt("Digite uma nota")
        if(valor_digitado.toUpperCase !='FIM'){
            soma += Number(valor_digitado)
            cont++
        }else{
            parar=true
        }
    }

    alert(soma/cont)
}
media()