let usuario;

usuario = prompt("introduce tu usuario");

if(usuario != null){
    alert("Bienvenido a cueva de cambio, " + usuario);
}
else{
    alert("No has introducido nada. Recarga la pagina para intentarlo de nuevo, ");
}

function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 128.41;
    let euro = 129.04;


const monedas = ["cotizacion dolar " + dolar , "cotizacion euro " + euro];

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
//INVOCO AL FORMULARIO CON LA CONST//

const formulario = document.getElementById('form')

//GENERO EVENTO//

formulario.addEventListener('submit' , function(e){
e.preventDefault();
let mail = document.getElementById('email-form').value;

console.log(mail);

//CAMBIO VALOR DE PROPIEDAD DISPLAY DE UN ELEMENTO DEL DOM//

document.getElementById('suscripcion').style.display = "block";
})

