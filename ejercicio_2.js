/*
  2. Haga un programa que lea un número y calcule la suma de todos los números PARES entre O y él. 
*/

let n = Number(prompt("Digite un número: "))
let inc = 0
let suma = 0

while (inc <= n) {
  if(inc % 2 == 0){
    suma = suma + inc
  }
  inc = inc + 1
}

document.write("La suma de todos los números pares: " + suma)