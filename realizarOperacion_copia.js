const realizarOperacion = (num1, num2, operation_math) => {
    if (operation_math === "suma") {
        return num1 + num2;
    } 
    else if (operation_math === "resta") {
        return num1 - num2;
    }
    else if (operation_math === "multiplicacion") {
        return num1 * num2;
    }
    else if (operation_math === "division") {
        if (num2 === 0) {
            return "No es posible realizar una división por cero";
        }
        return num1 / num2;
    }
    else {
        return "La operación matemática no es válida";
    }
};

let operation_math;

while (operation_math !== "salir") {
    let num1, num2;

    // Validación directa dentro del bucle para num1
    do {
        num1 = prompt("Ingrese el primer número:");
        if (isNaN(num1) || num1.trim() === "") {
            alert("Error: Ingrese un número válido.");
        } else {
            num1 = parseFloat(num1);
        }
    } while (isNaN(num1));

    // Validación directa dentro del bucle para num2
    do {
        num2 = prompt("Ingrese el segundo número:");
        if (isNaN(num2) || num2.trim() === "") {
            alert("Error: Ingrese un número válido.");
        } else {
            num2 = parseFloat(num2);
        }
    } while (isNaN(num2));

    operation_math = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operation_math === "salir") {
        alert("¡Gracias por utilizar la calculadora!");
        console.log("¡Gracias por utilizar la calculadora!");
        break;
    }

    let resultado = realizarOperacion(num1, num2, operation_math);
    
    alert(`El Resultado es: ${resultado}`);
    console.log(`El resultado es: ${resultado}`);

    let continuar = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();
    if (continuar !== "si") {
        alert("¡Gracias por utilizar la calculadora!");
        console.log("¡Gracias por utilizar la calculadora!");
        break;
    }
}

