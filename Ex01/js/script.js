function media(){
    let cont=0, soma=0, cond=true
    let valor_digitado

    while(cond){
        valor_digitado = prompt("Digite uma nota")
        if(valor_digitado.toUpperCase() == "FIM"){
            cond=false
        }else{
            soma += Number(valor_digitado)
            cont++
        }
    }

    return alert(soma/cont)
}
media()