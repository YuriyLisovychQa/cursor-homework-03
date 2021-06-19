document.getElementById("max-digit-btn").addEventListener("click", function() {
    let number = document.getElementById("max-digit").value;

    document.getElementById("result-max-digit").innerHTML = getMaxDigit(number);
    document.getElementById("max-digit").value = "";
});

document.getElementById("pow-of-number-btn").addEventListener("click", function() {
    let number = document.getElementById("get-number").value;
    let pow = document.getElementById("get-pow").value;

    document.getElementById("pow-of-number-result").innerHTML = getPow(number, pow);
    document.getElementById("get-number").value = "";
    document.getElementById("get-pow").value = "";
});

document.getElementById("beatify-name-btn").addEventListener("click", function() {
    let name = document.getElementById("user-name").value;

    document.getElementById("result-beatify-name").innerHTML = beatifyName(name);
    document.getElementById("user-name").value = "";
});

document.getElementById("user-revenue-btn").addEventListener("click", function() {
    let name = document.getElementById("user-revenue").value;

    document.getElementById("result-user-revenue").innerHTML = getRevenue(name);
    document.getElementById("user-revenue").value = "";
});

document.getElementById("random-number-btn").addEventListener("click", function () {
    let firstNumber = document.getElementById("random-first-number").value;
    let secondNumber = document.getElementById("random-second-number").value;

    document.getElementById("random-number-result").innerHTML = getRandomNumber(firstNumber,secondNumber);
    document.getElementById("random-first-number").value = "";
    document.getElementById("random-second-number").value = "";
});

document.getElementById("letter-in-sentence-btn").addEventListener("click", function () {
    let firstNumber = document.getElementById("sentence-input").value;
    let secondNumber = document.getElementById("letter-input").value;

    document.getElementById("letter-in-sentence-result").innerHTML = countLetter(firstNumber,secondNumber);
    document.getElementById("sentence-input").value = "";
    document.getElementById("letter-input").value = "";
});

document.getElementById("currency-convert-btn").addEventListener("click", function() {
    let currency = document.getElementById("currency-convert").value;

    document.getElementById("currency-convert-result").innerHTML = convertCurrency(currency);
    document.getElementById("currency-convert").value = "";
});

document.getElementById("random-password-btn").addEventListener("click", function() {
    let currency = document.getElementById("random-password").value;

    document.getElementById("random-password-result").innerHTML = getRandomPassword(currency);
    document.getElementById("random-password").value = "";
});

document.getElementById("letter-in-sentence-to-delete-btn").addEventListener("click", function () {
    let firstNumber = document.getElementById("sentence-to-delete-input").value;
    let secondNumber = document.getElementById("letter-in-sentence-to-delete-input").value;

    document.getElementById("letter-in-sentence-to-delete-result").innerHTML = filterSentence(firstNumber,secondNumber);
    document.getElementById("sentence-to-delete-input").value = "";
    document.getElementById("letter-in-sentence-to-delete-input").value = "";
});