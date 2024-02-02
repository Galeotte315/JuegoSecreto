let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo =10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    // return Math.floor(Math.random()*10)+1;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros.
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos lo numeros posibles')
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


// Desafíos:

//     Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// let altura = parseFloat(prompt("Ingresa tu altura en metros"));
// let peso = parseFloat(prompt("ingresa tu peso en kg"));
// let resultado =0;

// function calculadoraMasaCorporal(altura, peso) {
//     return peso/(altura*altura);
// }
// let IMC =calculadoraMasaCorporal(1.65,65);
// console.log(IMC);

//     Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function calculadoraF(num) {
//     let numero = 1;
//     let num2 =1;
//     while(numero<=num){
//         num2=num2*numero;
//         numero++;
//         console.log(num2);
             
//     }
//     return num2;   
// }
//     let num=10;
//     let resultado = calculadoraF(num);
//     console.log(`El factorial de ${num} es ${resultado}`);

// function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     } else {
//       return numero * calcularFactorial(numero - 1);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 5;
//   let resultado = calcularFactorial(numero);
//   console.log(`El factorial de ${numero} es ${resultado}`);


//     Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
//     si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// function convertidorDolares(dinero) {
//     let dolar=17.16;
//     let peso=0;
//     peso=dolar*dinero;
//     return peso;
// }
// let dinero = 3;
// let resultado = convertidorDolares(dinero);
// console.log(`La conversion de tu dinero ${dinero} es de ${resultado}`);


//     Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// function areaSala(altura, base) {
//     var area =altura*base;
//     var perimetro=2*(altura + base);
//     console.log(area);
//     console.log(perimetro);
// }
// let altura =5;
// let base = 15;
// areaSala(altura, base);


//     Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// function calculadoraCirculo(pi, radio, diametro) {
//     var pi = 3.14;
//     var area = pi * (radio*radio);
//     var perimetro = 2* pi * diametro;
//     console.log(area);
//     console.log(perimetro);
// }
// let radio = 6;
// let diametro = 12;
// calculadoraCirculo(pi, radio, diametro);


//     Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
// function tablaMult(num) {
//     let numero = 1;
//     console.log("Tabla de multiplicar ")
//     while (numero <= 10) {
//         var resultado =numero * num;        
//         console.log(`\n ${numero} * ${num} = ${resultado}`);
//         numero++;   
//     }
// }
// let num=10;
// tablaMult(num);

//otra forma de hacer el ejercicio.
// function mostrarTablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i++) {
//       var resultado = numero * i;
//       console.log(numero + " x " + i + " = " + resultado);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 7;
//   mostrarTablaDeMultiplicar(numero);



// Desafíos

//     Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];


//     Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// console.log(lenguajesDeProgramacion);
//     Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//     Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// function elementoDeLaLista(lenguajesDeProgramacion) {
//     console.log(lenguajesDeProgramacion);
// }

// elementoDeLaLista(lenguajesDeProgramacion);
//----------------------------------------------------------------------------------------------------------------------------
// function elementoInverso(lenguajesDeProgramacion) {
//     for(let i =0; i< lenguajesDeProgramacion.length; i++){
//         console.log(lenguajesDeProgramacion[i]);
//     }
// }
// elementoInverso(lenguajesDeProgramacion);

//     Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// console.log(lenguajesDeProgramacion.length);
// function elementoInverso(lenguajesDeProgramacion) {

//     for(let i =lenguajesDeProgramacion.length-1; i>= 0; i--){
//         console.log(lenguajesDeProgramacion[i]);
//     }
// }
// elementoInverso(lenguajesDeProgramacion);
//Recorre la lista de un array pero con un forEach
// lenguajesDeProgramacion.forEach(function(elemento, indice, array){
//         console.log(elemento, indice);
// })
//otra forma
// const reversed = lenguajesDeProgramacion.reverse();
// console.log(reversed);



//     Crea una función que calcule el promedio de los elementos en una lista de números.
// let listaNumeros =[1,20,13,4,5,17,6,55];
// let a=0, b=0, c=0;
// function promedioNumeros(listaNumeros) {
//     for(let i =0; i< listaNumeros.length; i++){
//         a=listaNumeros[i];
//         b=b+a;       
//         // console.log(listaNumeros[i]);
//     }
//     c=b/listaNumeros.length;
//     console.log(c);

// }
// promedioNumeros(listaNumeros);


//     Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function numeroGrandePequeño(lista) {
//     let mayor = lista[0];
//     let menor = lista[0];

//     for(let i =0; i< lista.length; i++){      
//         if(lista[i] > mayor){
//             mayor = lista[i];
//         }
//         if(lista[i] < menor){
//             menor=lista[i];
//         }
//     }
//     console.log('Mayor:', mayor);
//   console.log('Menor:', menor);
//     // console.log(`Valor mas grande $${mayor}`);
//     // console.log(`Valor mas pequeño ${menor}`);
// }
// let listaNumeros =[1,20,13,4,5,17,6,55];
// numeroGrandePequeño(listaNumeros);



//     Crea una función que devuelva la suma de todos los elementos en una lista.
// function sumaElementos(lista) {
//     for(let i=0; i<lista.length; i++){
//          num1=lista[i];
//          num2=num2+num1;
//     }
//     console.log(num2);
// }
// let num1=0, num2=0;
// let numeros= [1,20,13,4,5,17,6,55];
// sumaElementos(numeros);


//otra forma de hacerlo
// function calcularSuma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma;
//   }
  
//   let numeros = [15, 8, 25, 5, 12];
//   let suma = calcularSuma(numeros);
//   console.log('Suma:', suma);


//     Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// function posicionRelativa(elemento,lista) {
//     for(let i=0; i < lista.length; i++){
//         if(lista[i] === elemento){
//             return console.log(i);        
//         }
//         // console.log("Hola " + cuenta);                            
//         // console.log(lista[i])
//     }
//     return console.log(-1);
    
// }

//Otra forma de hacerlo
// function posicionRelativa(elemento, lista) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return console.log( i); // Retorna el índice del elemento encontrado
//       }
//     }
//     return console.log(-1); // Retorna -1 si el elemento no se encuentra en la lista
//   }

// let lista = [1,20,13,4,5,17,6,55];
// let elemento = 65;
// posicionRelativa(elemento, lista);


//     Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function sumaListas(lista1, lista2) {
//     let resultado=[];
//     for(let i=0; i<lista1.length; i++){
//         let sumaElementos = lista1[i]+lista2[i];
//         resultado.push(sumaElementos);
//     }
//     return resultado;
// }
// let lista1=[1,2,3,4,5];
// let lista2=[6,7,8,9,10];
// let resultadoSuma=sumaListas(lista1, lista2);
// console.log(resultadoSuma);

//     Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function cusdradoDeDosListas(lista1, lista2) {
//     let resultado=[];
//     for(i=0; i<lista1.length; i++){
//         let cuadrado=lista1[i]*lista1[i];       
//         let cuadrado2=lista2[i]*lista2[i];
//         resultado.push(cuadrado,cuadrado2);
//     }
//     return resultado;
// }
// let lista1=[1,2,3,4,5];
// let lista2=[6,7,8,9,10];
// let resultadoSuma=cusdradoDeDosListas(lista1, lista2);
// console.log(resultadoSuma);