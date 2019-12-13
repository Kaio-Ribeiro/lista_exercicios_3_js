
function qtdCaracteres(){
    let valor_digitado, qtd_char, qtd_letra

    valor_digitado = prompt("Digite seu nome completo")

    qtd_char = valor_digitado.length

    pos = valor_digitado.indexOf(" ")
    while(pos!=-1){
        valor_digitado = valor_digitado.replace(" ", "")
        pos = valor_digitado.indexOf(" ")
    }

    qtd_letra = valor_digitado.length

    return alert("Numero de caracteres: "+qtd_char+"\nNumero de letras: "+qtd_letra)
}
qtdCaracteres()