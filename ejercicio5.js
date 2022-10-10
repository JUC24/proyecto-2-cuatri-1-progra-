/*
  5. Haga un programa que lea un número e imprima: a. Si el número es par, calcula numero / 2 e imprime el valor resultante. b. Si el número es impar, calcular (número * 3) + 1, e imprime el valor resultando. c. Evalúa el resultado de la operación. d. EL PROBLEMA DEBE DETENERSE CUANDO EL RESULTADO DE LA OPERACIÓN SEA 1 
*/

let info_numero = 0

while (info_numero  != 1) {
  if(info_numero  != 1) { 
    let n = Number(prompt("Digite un número: "))
    if ( n % 2 == 0 ){
      info_numero  = n/2 
    } else if ( n % 2 != 0 ){
      info_numero  = (n * 3)+1
    }
    document.write("El número resultante es " + info_numero + "." + "<br>")
  }else{
    break
  } 
}