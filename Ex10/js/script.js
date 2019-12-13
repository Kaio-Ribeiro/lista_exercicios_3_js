(function(){
    const dataAtual = new Date()
    const horaAtual = dataAtual.getHours()

    if(horaAtual > 11 && horaAtual < 18){
        alert("Boa Tarde!")    
    }else if(horaAtual > 17 && horaAtual <= 24){
        alert("Boa Noite!") 
    }else if(horaAtual >=0 && horaAtual <= 11){
        alert("Bom Dia!") 
    }
})();