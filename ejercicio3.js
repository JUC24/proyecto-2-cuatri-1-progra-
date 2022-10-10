/*
  3. Haga un programa que lea varios números, se detiene cuando lee un cero, e imprima cuantos números leyó 
*/

let cont = 0
let n

while (n !=0){
  if(n != 0){
    n = Number(prompt("Digite un número: "))
    cont = cont + 1
  }else {
    break
  }
}
document.write("La cantidad de números digitados fue: " + cont)