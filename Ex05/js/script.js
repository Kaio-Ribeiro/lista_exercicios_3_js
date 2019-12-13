function data(){
    let cont_maior=0, cont_menor=0, cond=true
    let valor_digitado

    valor_digitado = prompt("Digite uma data")

    dia = valor_digitado.slice(0,2)
    mes = valor_digitado.slice(3,5)
    ano = valor_digitado.slice(6,10)

    return document.write("Dia: "+dia+"\nMes: "+mes+"\nAno: "+ano)
}
data()