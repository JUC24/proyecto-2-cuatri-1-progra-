/*
  4. Haga un programa que lea varios números, se detiene cuando lee un cero e imprime el PROMEDIO de los números que leyó 
*/

let cont = 0
let suma = 0
let n

while (n != 0){
  if(n != 0){
    n = Number(prompt("Digite un número: "))
    cont = cont + 1
    suma = suma + n
  } else {
    cont = cont - 1
    break
  }
}

document.write("El promedio es: " + (suma/cont))