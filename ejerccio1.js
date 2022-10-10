/*
  1. Haga un programa que lea 2 números, detecte el menor, e imprima todos los números desde el menor hasta el mayor de ambos. 
*/


let val1 = prompt("Ingrese un número: ")
let val2 = prompt("Ingrese un número: ")

val1 = Number(val1)
val2 = Number(val2)

if(val1 > val2){
  alert("El primer número es mayor que el segundo número")
} else{
  alert("El segundo número es mayor que el primero número")
}

while(val1 > val2){
  val1 = val1 + 1
  document.write(val1)
}

while(val1 < val2){
  val2 = val2 + 1
  document.write(val2)
}
