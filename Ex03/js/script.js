function nomes_inversos(){
    let parar=false, nomes=' '
    let valor_digitado

    while(!parar){
        valor_digitado = prompt("Digite um nome")
        if(valor_digitado.toUpperCase() != 'FIM'){
            nomes = valor_digitado + ' ' + nomes
        }
        else{
            parar = true
        }
    }

    alert(nomes)
}
nomes_inversos()