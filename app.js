//para modificar el texto con anclaje en html
/*let titulo = document.querySelector("h1");
titulo.innerHTML = " Bienvenidos al juego del numero secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Escoge un numero del 1 al 10";
*/
//reduccion de codigo usando con variables mas arriba con funciones

let numeroSecreto = 0;
console.log (numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;  
}


//declaracion de funcion

function verificarIntento (){
    //parseint para solicitar que los sean numeros ambos
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (intentos);   
    //para verfifcar que tipo de datos se ingresan
   /*console.log (typeof(numeroDeUsuario));
    console.log (typeof(numeroSecreto));
    console.log (numeroSecreto);
    console.log (numeroDeUsuario);
    console.log (numeroDeUsuario === numeroSecreto);
    */
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p",`Felicidades, acertaste el numero! en ${intentos} ${(intentos ===1) ? "vez" : "veces"}` );
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El numero secreto es menor ")
        }else {
            asignarTextoElemento ("p", "El numero secreto es mayor ")
        }
        intentos ++; 
        limpiarCaja();
    }
    return;

}

function condicionesIniciales (){
    asignarTextoElemento("h1", " Bienvenidos al juego del numero secreto");
    asignarTextoElemento("p", `Escoge un numero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
    

}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value= "";
    //valorCaja.value= "";
    //numeroSecreto = generarNumeroSecreto ();
    //intentos = 1;
    
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p", "se terminaron las probabilidades");

    }else{

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }    
    }

    /*esta funcion limpia la caja y reinicia el juego
    limpia la caja, indica mensaje de intervalo de numero 
    genera el numero aleatorio y desahilita el boton hasta 
    completarse el juego y inicializa el numero de intentos
    */
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector ("#reiniciar").setAttribute("disabled", "true")
    
}


    

    


condicionesIniciales();

//llamando las funciones declarado mas arriba y en html
//asignarTextoElemento("h1", " Bienvenidos al juego del numero secreto");