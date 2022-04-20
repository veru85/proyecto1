// capturo elementos html

let capturarNombre = document.getElementById("valorNombre")

let capturarApellido = document.getElementById("valorApellido")

let capturarCantidad = document.getElementById("cantidad")


let valorEntrada = 200

let resultadoFinal


//calculo porcentaje descuento

 function calcularValorTicket (desc){

    let precioConDesc = Number(valorEntrada - valorEntrada*(desc/100))
    let cantcast = Number(capturarCantidad.value)
    return (precioConDesc * cantcast ) 
}

//calculo valor segun categoria 

function tipoCategoria (){

         switch(categoria.value){
        case "1" : 
        alert ("el valor de entrada con descuento es de $40");
        
        resultadoFinal = calcularValorTicket(80)
        
        break;
        
        case "2" : alert ("el valor de entrada con descuento es de $100")
        
        resultadoFinal = calcularValorTicket(50)

        break;
        case "3" : alert ("el valor de entrada con descuento es de $170")
        resultadoFinal = calcularValorTicket(15)
        break;
   
        default: alert("debe especificar categoria")
    }
}


//funcion final del boton comprar

function precioFinal (){



    tipoCategoria()

    alert ("Hola " + capturarNombre.value +" " + capturarApellido.value + ", el valor final de su compra es de $ " + resultadoFinal )
}

