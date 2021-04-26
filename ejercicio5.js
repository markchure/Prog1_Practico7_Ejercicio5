/* Implementar function primerNoRepetido(frase)
Recibe una frase y retorna el primer carácter que no tiene repetidos. Ejemplo: recibe:
“abacddbec” , retorna “e”. Si no hay ninguno, retorna “NINGUNO”.*/
function primerNoRepetido(frase) {
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    let esRepetido = false;

    for (let x = 0; x < frase.length; x++) {
      if (i != x){
        if (frase.charAt(i) == frase.charAt(x)){
          esRepetido = true;
          contador += 1;
          break;
        }
      }
    }

    if (!esRepetido){
      console.log("El primero caracter no repetido es: " + "\'" + frase.charAt(i) + "\'");
      break;
    }
  }

  if(frase.length == contador){
    console.log("Ninguno");
  }
}

primerNoRepetido("aaaaaaaa f dtfg");
