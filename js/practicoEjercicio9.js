/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/
let frase = prompt("Ingrese una frase");
let vocales = "";

for (let letra = 0; letra < frase.length; letra++) {
    let caracter = frase.charAt(letra).toLowerCase();

    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u" || caracter === "á" || caracter === "é" || caracter === "í" || caracter === "ó" || caracter === "ú") {
        vocales = vocales + caracter;
    }
}

document.write(`Las vocales de la frase ingresada son: ${vocales}`);