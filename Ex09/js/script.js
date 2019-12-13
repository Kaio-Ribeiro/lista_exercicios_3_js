function posicaoCaractere(){
    let nome, numero, resultado

    nome = prompt("Digite seu nome completo")
    numero = prompt("Digite um numero")

    qtd_char = nome.length

    if(numero < 1 || numero > qtd_char){
        return alert("Numero Invalido")
    }else{
        resultado = nome.charAt(numero,)
        return alert(resultado)
    }
}
posicaoCaractere()