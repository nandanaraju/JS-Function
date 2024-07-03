function compareNumbers() {
    const firstNumber =Number(document.getElementById('firstNumber').value);
    const secondNumber =Number(document.getElementById('secondNumber').value);
    let resultText;

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        resultText = "Please enter valid numbers.";
     if (firstNumber > secondNumber) {
        resultText = "The first number is greater than the second number.";
    } else if (firstNumber < secondNumber) {
        resultText = "The first number is less than the second number.";
    } else {
        resultText = "The numbers are equal.";
    }

}
    

    document.getElementById('result').innerHTML = resultText;
}