

function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 128.41;
    let euro = 129.04;


const monedas = ["cotizacion dolar 128.41  " , "cotizacion euro 129.04"];

    for (let i = 0; i < monedas.length; i++) {
        alert(monedas[i]);
    }



    if(document.getElementById("valor").value == ''){
        alert("Debe completar el monto");

    }
    else{
        if (document.getElementById("uno").checked){
            resultado = valore / dolar;
            alert("El cambio de Pesos a Dolares es: " + resultado);
        }
        else{
            if (document.getElementById("dos").checked){
                resultado = valore / euro;
                alert("El cambio de Pesos a Euros es: " + resultado);
            } 
            else{
                alert("Debe completar todos los requerimientos"); 
             }
            
            }
}
    
}




