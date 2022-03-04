function calcular() {
    var operacao = document.getElementById("operacao").value
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    if(num1 == '' || num1 == null){
    alert('Favor digitar um número válido')
    document.getElementById('num1').focus()
    return false
    }

    if(num2 == '' || num2 == null){
    alert('Favor digitar um número válido')
    document.getElementById('num2').focus()
    return false
    }

    var resultado = null

    //conversão de tipo
    num1 = Number(num1)
    num2 = Number(num2)

    if(operacao == 1){
      resultado = num1+num2  //soma
    }
    else if(operacao == 2){
      resultado = num1-num2  //subtração
    }
    else if(operacao == 3){
      resultado = num1*num2  //multiplicação
    }
    else if(operacao == 4){
      resultado = num1/num2  //divisão
    }else{
    alert('Selecione uma operação')
    return false
    }

    document.getElementById('resultado').value = resultado
    
}



