module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let wordNumber = "";
    let hundreds = "";

    if (number / 100 >= 1) {
        hundreds = ones[Math.floor(number / 100)];
        if (number % 100 === 0) {
            wordNumber = hundreds + ' ' + 'hundred';
        } else if (number % 10 === 0) {
            wordNumber = hundreds + ' ' + 'hundred' + ' ' + tens[(number % 100) / 10];
        } else if (number % 100 >= 10 && number % 100 <= 19) {
            wordNumber = hundreds + ' ' + 'hundred' + ' ' + teens[number % 10];
        } else if (number % 100 < 10 && number % 100 >= 0) {
            wordNumber = hundreds + ' ' + 'hundred' + ' ' + ones[number % 10];
        } else if (number % 100 >= 20) {
            wordNumber = hundreds + ' ' + 'hundred' + ' ' + tens[[(number % 100) - (number % 10)] / 10] + " " + ones[number % 10];
        }
    } else {
        if (number % 10 === 0 && number >= 20) {
            wordNumber = tens[(number % 100) / 10];
        } else if (number % 100 >= 10 && number % 100 <= 19) {
            wordNumber = teens[number % 10];
        } else if (number % 100 < 10 && number % 100 >= 0) {
            wordNumber = ones[number % 10];
        } else if (number % 100 >= 20) {
            wordNumber = tens[[(number % 100) - (number % 10)] / 10] + " " + ones[number % 10];
        }
    }

    return wordNumber;
}
