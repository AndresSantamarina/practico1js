/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));
let numero3 = parseInt(prompt("Ingrese un tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`El número mayor es el ${numero1}`)
}
else if (numero2 > numero1 && numero2 > numero3) {
    document.write(`El número mayor es el ${numero2}`)
}
else if (numero3 > numero1 && numero3 > numero2) {
    document.write(`El número mayor es el ${numero3}`)
}
else if (numero1 > numero2 && numero1 == numero3) {
    document.write(`El número mayor es el ${numero1}`)
}
else if (numero1 > numero3 && numero1 == numero2) {
    document.write(`El número mayor es el ${numero1}`)
}
else if (numero2 > numero1 && numero2 == numero3) {
    document.write(`El número mayor es el ${numero2}`)
}
else if (numero2 > numero3 && numero2 == numero1) {
    document.write(`El número mayor es el ${numero2}`)
}
else if (numero3 > numero1 && numero3 == numero2) {
    document.write(`El número mayor es el ${numero3}`)
}
else if (numero3 > numero2 && numero3 == numero1) {
    document.write(`El número mayor es el ${numero3}`)
}
else {
    document.write("Los números son iguales")
};