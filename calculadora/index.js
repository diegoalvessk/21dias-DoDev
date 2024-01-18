function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "^":
            let cont = 1;  // Inicializar cont com 1 para operações de potência
            let result = num1;
            while (cont < num2) {
                result = result * num1;
                cont++;
            }
            return result;
        default:
            console.log("Operador inválido");
            return null;
    }
}

console.log("Informe o primeiro número");
let num1 = prompt();

console.log("Informe o segundo número");
let num2 = prompt();

console.log("Informe a operação: + , - , * , / , ^");
let operador = prompt();

let resultado = calculadora(parseFloat(num1), parseFloat(num2), operador);

if (resultado !== null) {
    console.log(`Resultado: ${resultado}`);
}
