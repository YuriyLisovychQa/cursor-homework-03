const MILITARY_COLLECTION = 1.5;
const VALUE_ADDED_TAX = 18;
const DEFAUL_DIGITS_QUANTITY = 8;
const MAX_DIGITS_QUANTITY = 8;
const MIN_DIGITS_QUANTITY = 1;

document.getElementById("max-digit-btn").addEventListener("click", function() {
    let number = document.getElementById("max-digit").value;

    document.getElementById("result-max-digit").innerHTML = getMaxDigit(number);
    document.getElementById("max-digit").value = "";
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

// (1 function)
const getMaxDigit = (number) => {
    return(
        isNaN(number)
            ? "Error: Incorrect value"
            : Math.max(...number.split("").map((element) => +element))
    );
}

// (3 function)
const beatifyName = (name) => {
    return(name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase());
}

// (4 function)
const getRevenue = (income) => {
    return (
        isNaN(income)
            ? "Error: Incorrect value"
            : income - income * (Math.floor(MILITARY_COLLECTION + VALUE_ADDED_TAX) / 100));
}

// (5 function)
const getRandomNumber = (firstNumber, secondNumber) => {
    return (isNaN(firstNumber) && isNaN(secondNumber)) || firstNumber >= secondNumber
        || firstNumber < 0 || secondNumber < 0
        ? "Error: Incorrect value"
        : Math.floor((Math.random() * secondNumber) + firstNumber);
}

// (6 function)
const countLetter = (sentenceToCount, letterToCount) => {
    return sentenceToCount.split("").filter(letter => letter === letterToCount).length;
}

// (7 function)
const convertCurrency = (currency)=> {
    if (currency.includes("$")) {
        return (currency).substring(0, currency.length - 1) * 27
    } else if (currency.includes("UAH")) {
        return Math.floor((currency).substring(0, currency.length - 3) / 27)
    } else {
        return "Error: Incorrect value";
    }
}

// (8 function)
const getRandomPassword = (number) => {
    if (inRange(number, MIN_DIGITS_QUANTITY, MAX_DIGITS_QUANTITY)) {
        alert(
            Math.abs(
                Math.floor(
                    Math.random() *
                    (Math.pow(10, number - 1) - Math.pow(10, number)) +
                    number
                )
            )
        );
    } else if (number === "") {
        alert(
            Math.abs(
                Math.floor(
                    Math.random() *
                    (Math.pow(10, DEFAUL_DIGITS_QUANTITY - 1) -
                        Math.pow(10, DEFAUL_DIGITS_QUANTITY)) +
                    DEFAUL_DIGITS_QUANTITY
                )
            )
        );
    } else {
        return "Error: Incorrect value";
    }
}

const inRange = (value, min, max) => {
    return ((value - min) * (value - max) <= 0);
}

// (9 function)
const filterSentence = (sentenceToDelete, letterToDelete) => {
    return sentenceToDelete.split("").filter(letter => letter !== letterToDelete).join("");
}

