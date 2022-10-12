var nome = "Aldo";
let tipo = "cliente";
var virgola = ",";
const numero = 3.14;

//variabili separate
document.getElementById("concatena").innerHTML= nome+", "+tipo+", "+numero;

//variabili unite
var insieme = nome+virgola+tipo+virgola+numero;

document.getElementById("concatena2").innerHTML=insieme;


var parola = "Mario";
document.getElementById("var").innerHTML = parola; 

{
  let parola = "Carla";
  document.getElementById("let").innerHTML = parola;
}

document.getElementById("final").innerHTML = parola;



var parola = "Mario";
document.getElementById("let2").innerHTML = parola;

{
  let parola = "Carla";
  document.getElementById("let3").innerHTML = parola;


  document.getElementById("final2").innerHTML = parola;
}



//operazioni
const valore = 15;
var val=15;


{ 
  document.getElementById("iniziale").innerHTML = "Valore iniziale: " + val; 
}

{
  document.getElementById("valore1").innerHTML = "Addizione e Incremento: " + (val + val) + "," + (val += 1 + val);
}

val=15;
{ 
  document.getElementById("valore2").innerHTML = "Sottrazione e Decremento: " + (val - 10) + "," + (val -= 11);
}

val=15;
{
  document.getElementById("valore3").innerHTML = "Moltiplicazione: " + (val *=3);
}

{ 
  document.getElementById("valore4").innerHTML = "Divisione: " + (val /= 9);
}

val=15;
{
  document.getElementById("valore5").innerHTML = "Concatenazione: " + val + " è un numero";
}

Id("valore5").innerHTML="concatenazione: "+valore+" è un numero";










