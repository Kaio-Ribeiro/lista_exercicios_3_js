function maioridade(){
    let cont_maior=0, cont_menor=0, cond=true
    let valor_digitado

    while(cond){
        valor_digitado = prompt("Digite uma idade")
        if(valor_digitado.toUpperCase() == "FIM"){
            cond=false
        }else if(valor_digitado > 17){
            cont_maior++
        }else if(valor_digitado < 18){
            cont_menor++
        }
    }

    return alert("Maiores de idade: "+cont_maior+"\nMenores de idade: "+cont_menor)
}
maioridade()