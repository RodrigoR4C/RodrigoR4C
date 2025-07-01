function calculadora() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var operacao = prompt("Digite a operação (+, -, *, /):");

    var resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida");
            return;
    }

    alert("O resultado é: " + resultado);
}

calculadora();
