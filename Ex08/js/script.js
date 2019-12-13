function verificarSobrenome(nome_separado){
    if(nome_separado.length>1){
        return true
    }else{
        return false
    }
}
function miniminoPrimeiroNome(nome){
    let nome_separado = nome.split(" ")

    if(nome_separado[0].length>=4){
        return verificarSobrenome(nome_separado)
    }else{
        return false
    }
}
function validarNome(){
    let nome

    nome = prompt("Digite seu nome completo")

    let validar = miniminoPrimeiroNome(nome)

    if(validar){
        alert("Nome valido")
    }else{
        alert("Nome Invalido")
    }

    miniminoPrimeiroNome(nome)


}
validarNome()