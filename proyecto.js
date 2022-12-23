let num1;
let num2;

let opcion = prompt("Ingresa la opcion deseada: + , - , * , / , 0 para finalizar");

while (opcion != 0){
    num1 = parseInt(prompt("Ingresa el primer número: "));
    while(isNaN(num1)) {
        num1 = parseInt(prompt("Lo que ingresó NO cumple la función de un número, por favor ingrese el primer número.."));
    }
    num2 = parseInt(prompt("Ingresa el segundo número: "));
    while (isNaN(num2)){
        num2 = parseInt(prompt("Ingresa el segundo número: "));
        while (isNaN(num2)) {
            num2 = parseInt(prompt("Lo que ingresó NO cumple la función de un número, por favor ingrese el segundo número.."));
        }
    }
}


function calculadora(num1, num2, operacion){
    switch (operacion) {
        case "+":
            return("El resultado de la suma es " + num1 + num2);
            break;
        case "-":
            return("El resultado de la resta es " + num1 - num2);
            break;
        case "*":
            return("El resultado de la multiplicación es " + num1 * num2);
            break;
        case "/":
            if (num1 == 0 && num2 == 0){
                alert("El resultado es indeterminado");
              } else {
                alert("El resultado de la division es: " + num1 / num2);
              }
             break;

        default:
            return 0;
            break;
    }
    
    let opcion = prompt("Ingresa la opcion deseada: + , - , * , / , 0 para finalizar");

}

calculadora();





