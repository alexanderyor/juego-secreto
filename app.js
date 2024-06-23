/*
let titulo =document.querySelector('h1');
    titulo.innerHTML='Indique un numero';

let parrafo = document.queriSelector('p');
    parrafo = innerHTML = 'Indica un numero del 1 al 10 ';

*/

let numeroSecreto = 0;

let intentos = 0;
let listaDeNumerosSorteados = [];
let intentosMaximos = 10;


function  modificarElementoHtml(elemento , texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

  function verificarIntento(){
     
        let numeroDeUsuario = parseInt(document.getElementById("numeroDeUsuario").value);
      console.log(numeroDeUsuario);
      console.log(numeroDeUsuario === numeroSecreto);
     
       if(numeroDeUsuario === numeroSecreto){
          modificarElementoHtml('p',`acertaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
       }else{
          if(numeroDeUsuario > numeroSecreto){
              modificarElementoHtml('p','el numero es menor');
          }else{
              modificarElementoHtml('p','el numero es mayor');
          }
          intentos++;
          limpiar();
       }
       return;
  }

  function limpiar(){
      document.querySelector('#numeroDeUsuario').value = '';
  }

  function condicionesIniciales(){
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    console.log(listaDeNumerosSorteados);
    modificarElementoHtml('h1','indique un numero');
    modificarElementoHtml('p',`indica un numero del 1 al ${intentosMaximos}`);
    intentos =1;
  }


    function reiniciar(){
      //evento click del boton activarlo y cuando reinicie todo desactivarlo 
      document.getElementById("reiniciar").setAttribute('disabled','true');
      condicionesIniciales();
      generarNumeroSecreto();
      limpiar();
    }

  function generarNumeroSecreto(){
    
    let  numeroGenerado =  Math.floor(Math.random()*intentosMaximos)+1;
        if(listaDeNumerosSorteados.length == intentosMaximos){
            modificarElementoHtml('p','ya se sortearon todo los numeros posibles');
            return;
        }else{
              if(listaDeNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
              listaDeNumerosSorteados.push(numeroGenerado);
              return numeroGenerado;
            }
      }

  }
  condicionesIniciales();
  
  

