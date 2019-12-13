function inicialMaiuscula(nome_separado){
    for(let i=0; i<nome_separado.length; i++){
        if(nome_separado[i] != "do" && nome_separado[i] != "da" && nome_separado[i] != "de"){
            let inicial = nome_separado[i].charAt(0)
            if(inicial!=inicial.toUpperCase()){
                return false
            }
        }
    }
    return true
}
function verificarSobrenome(nome_separado){
    if(nome_separado.length>1){
        return inicialMaiuscula(nome_separado)
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
function verificarNumero(nome){
    let n = nome.search(/[0-9]/)

    if(n==-1){
        return true
    }else{
        return false
    }
}
function validarNome(){
    let nome

    nome = prompt("Digite seu nome completo")

    let validar = miniminoPrimeiroNome(nome) && verificarNumero(nome)

    if(validar){
        alert("Nome valido")
    }else{
        alert("Nome Invalido")
    }

    miniminoPrimeiroNome(nome)


}
validarNome()