const MILITARY_COLLECTION = 1.5;
const VALUE_ADDED_TAX = 18;
const DEFAULT_DIGITS_QUANTITY = 8;
const MAX_DIGITS_QUANTITY = 8;
const MIN_DIGITS_QUANTITY = 1;

// (1 function)
const getMaxDigit = (number) => {
    return(
        isNaN(number)
            ? "Error: Incorrect value"
            : Math.max(...number.split("").map((element) => +element))
    );
}

// (2 function)

const getPow = (number, pow) =>{
    let result = 1;
    for (let i = 1; i <= Math.abs(pow); i ++){
        if(pow >= 0)
            result = number * result;
        else result = result * (1 / number);
    } return result;
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
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    return (isNaN(firstNumber) && isNaN(secondNumber)) || firstNumber >= secondNumber
        || firstNumber < 0 || secondNumber < 0
        ? "Error: Incorrect value"
        : Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
}

// (6 function)
const countLetter = (sentenceToCount, letterToCount) => {
    return sentenceToCount.split("").filter(letter => letter === letterToCount).length;
}

// (7 function)
const convertCurrency = (currency)=> {
    if (currency.includes("$")) {
        return (currency).substring(0, currency.length - 1) * 27
    } else if (currency.toUpperCase() || currency.toLowerCase()) {
        return Math.floor((currency).substring(0, currency.length - 3) / 27)
    } else {
        return "Error: Incorrect value";
    }
}

// (8 function)
const getRandomPassword = (number) => {
    if (inRange(number, MIN_DIGITS_QUANTITY, MAX_DIGITS_QUANTITY)) {
        return (
            Math.abs(
                Math.floor(
                    Math.random() *
                    (Math.pow(10, number - 1) - Math.pow(10, number)) +
                    number
                )
            )
        );
    } else if (number === "") {
        return (
            Math.abs(
                Math.floor(
                    Math.random() *
                    (Math.pow(10, DEFAULT_DIGITS_QUANTITY - 1) -
                        Math.pow(10, DEFAULT_DIGITS_QUANTITY)) +
                    DEFAULT_DIGITS_QUANTITY
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