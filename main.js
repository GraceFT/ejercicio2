var num1, num2, num3, suma, promedio;

num1= prompt("Por favor, ingrese un numero"," ");
num1=parseInt(num1);
num2= prompt("Por favor, ingrese un numero"," ");
num2=parseInt(num2);
num3= prompt("Por favor, ingrese un numero"," ");
num3=parseInt(num3);

suma= num1+num2+num3;
promedio=suma/3;
promedio=parseFloat(promedio);
alert("El promedio de las variables es " + promedio);
