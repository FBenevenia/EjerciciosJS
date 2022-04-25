console.log("Bienvenido a la consola de JS");
document.write("<h1>Hello World</h1>"); //punto 2
console.log(2);
console.log(2+2);
console.log("edad:", 25)//no hace falta cerrar este comentario;
console.log("Florencia"," ","Benevenia");
console.log("Florencia"+" "+"Benevenia");
var PrimerDato;


alert("Hello World"); //punto 1

var A = 3
var B = 5
var suma = A+B
document.write(suma+"<br>");//punto 3

var nombre = prompt("Ingrese su nombre de usuario")
document.write("Hola " + nombre); //punto 4

var edad1 = parseInt(prompt("Ingrese su edad"))
var edad2 = parseInt(prompt("Ingrese su nro favorito"))
var suma2 = edad1 + edad2
document.write("<br>" + suma2 + "<br>"); //punto 5

if(edad1>=18){
    document.write("Felicidades! Ya podes manejar un auto"+"<br>")
} //punto 18

var punto6
var punto6 = edad1 > edad2 ? suma>edad1 ? suma : edad1 : edad2
document.write("El nro mayor es:", punto6+"<br>") //punto 6 y 7

var nota = parseFloat(prompt("ingrese la nota:"));
var calificacion = nota < 7 ? "desaprobado" : "aprobado"; //operador ternario
console.log(calificacion); 
if (nota>=0 && nota<3){
    document.write("La nota es Muy Deficiente")
}
if (nota>=3 && nota<5){
    document.write("La nota es Insuficiente")
}
if (nota>=5 && nota<6){
    document.write("La nota es Suficiente")
}
if (nota>=6 && nota<7){
    document.write("La nota es Buena")
}
if (nota>=7 && nota<9){
    document.write("La nota es Notable")
}
if (nota>=9 && nota<=10){
    document.write("La nota es Sobresaliente")
}
if(nota>10){
    document.write("La nota no es valida")
} // punto 19

var nro=parseInt(prompt("Ingrese un nro o 0 para finalizar:"));
while(nro !=0){
    if(nro %2 == 0){
        console.log("El valor ingresado es par:",nro)
    } else{
        console.log("El valor ingresado no es divisible por 2:",nro)
    }
    nro=parseInt(prompt("Ingrese un nro o 0 para finalizar:"))
}
console.log("Fin") //punto 8

for(i=0; i<5; i++){
    console.log("Valor de i:",i)
}

var divisibilidad //punto 13 y 14
if(edad1 %2 == 0){
    console.log("La edad es divisible por 2")
} else{
    if(edad1 %3 == 0){
        console.log("La edad es divisible por 3")
    } else{
        if(edad1 %5 == 0){
            console.log("La edad es divisible por 5")
        } else{
            if(edad1 %7 == 0){
                console.log("La edad es divisible por 7")
            } else{
                console.log("no es divisible por 2, 3, 5 o 7")
            }
        }
    }
}

