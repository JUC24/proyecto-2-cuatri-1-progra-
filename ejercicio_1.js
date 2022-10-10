/* 
  1. Escribir un programa para imprimir la tabla de multiplicar de un número dado.
  Por ejemplo si un usuario digita 2, va a mostrar la tabla de multiplicar con 2.
  Ejemplo: 2,4,6,8,10...
*/

let val = prompt("digite un numro del 0 al 10: ")

for (let i = 0; i < 11; i++){
  document.write(val + " * " + i + " = " + (val * i) + "<br>")
}