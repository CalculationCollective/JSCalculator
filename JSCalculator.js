const num1 = Number(prompt("Enter the first number: "));
const calculationType = Number(prompt("Choose between:\n1) Addition\n2) Subtraction\n3) Multiplication\n4) Division"));
const num2 = Number(prompt("Enter the second number: "));

const element = document.getElementById("Result");

switch (calculationType)  {
    case 1:
        element.innerHTML = "Result: " + (num1 + num2);
        break;
    case 2:
        element.innerHTML = "Result: " + (num1 - num2);
        break;
    case 3:
        element.innerHTML = "Result: " + (num1 * num2);
        break;
    case 4:
        element.innerHTML = "Result: " + (num1 / num2);
        break;
    default:
        console.log(calculationType + " is not a valid function");
        break;
}