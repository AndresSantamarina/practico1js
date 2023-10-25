/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
if (numero1 > numero2) {
    document.write(`El número mayor es el ${numero1}`)
}
else if (numero1 != numero2){
    document.write(`El número mayor es el ${numero2}`)
}
else{
    document.write("Los números son iguales")
};

