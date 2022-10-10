/*
  2. Escriba un programa para mostrar solo aquellos números de una lista que satisfagan las siguientes condiciones.
  a. El número debe ser divisible por cinco.
  b. Si el número es mayor que 150, sáltelo y pase al siguiente número
  c. Si el número es mayor que 500, detenga el ciclo
  La lista es la siguiente: numbers = [12, 75, 150, 180, 145, 525, 50] 
*/

let listanumeros = [12, 75, 150, 180, 145, 525, 50]


for(let i = 0; i < 6; i++){
  
  if(listanumeros[i] % 5 == 0 && listanumeros[i] < 150){
    document.write(listanumeros[i] + "<br>")
  }
  
  if(listanumeros[i] > 500){
    break
  }
}
