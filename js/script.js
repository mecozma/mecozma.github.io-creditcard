function getFormData() {
        var card = {
            cardNumber: document.getElementById("cardNumber").value,
            cvv: document.getElementById('CVV').value,
            cardOwnerName: document.getElementById('fullName').value,
            cardExpiryDate: document.getElementById('cardExpiryDate').value
        }
        console.log(card);
        return card;
    }
var creditCard = document.getElementById("creditCard");

var fullName = document.getElementById("fullName");
var expiryDate = document.getElementById("expiryDate");
var cardOwnerName = "Eduard Cozma";
var cardNumber = "4115555555555";
var cardExpiryDate = "10/20";

function flip() {
    creditCard.classList.add("flipped");
    console.log("works");
}
function checkInputIsValid(cardNumber, cardOwnerName, cardExpiryDate) {
    //https://www.cybersource.com/developers/getting_started/test_and_manage/best_practices/card_type_id/
    //research how to identify Maestro cards
    //also take a look at Visa cards
    if (cardNumber.length === 14 && (betweenRange(cardNumber.slice(0, 6), 300000, 305999) ||
        betweenRange(cardNumber.slice(0, 6), 309500, 309599) ||
        betweenRange(cardNumber.slice(0, 6), 360000, 369999) ||
        betweenRange(cardNumber.slice(0, 6), 380000, 399999))) {
        console.log("you have an Diners Club and Carte Blanche caed");
    } else if (cardNumber.length === 16 && (betweenRange(cardNumber.slice(0, 6), 601100, 601109) ||
        betweenRange(cardNumber.slice(0, 6), 601120, 601149) ||
        cardNumber.slice(0, 6) == 601174 ||
        betweenRange(cardNumber.slice(0, 6), 601177, 601179) ||
        betweenRange(cardNumber.slice(0, 6), 601186, 601199) ||
        betweenRange(cardNumber.slice(0, 6), 644000, 659999))) {
        console.log("you have an Discovery Credit Card");

    } else if (cardNumber.length === 15 && (cardNumber[0] == 3 && (cardNumber[1] == 4 || cardNumber[1] == 7))) {
        console.log("you have an american express card");
    } else if (cardNumber.length === 15 && (cardNumber.slice(0, 4) == 2014 || cardNumber.slice(0, 4) === 2149)) {
        console.log("you own a enRoute credit card");

    } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && (cardNumber.slice(0, 4) >= 3528 && cardNumber.slice(0, 4) <= 3589)) {
        console.log("you own a JCB credit card");

    } else if (cardNumber.length === 16 && betweenRange(cardNumber.slice(0, 6), 510000, 559999)) {
        console.log("you own a MasterCard Credit card");

    } else if (cardNumber.length === 13 || cardNumber.length === 16 && cardNumber[0] === 4) {
        console.log("you may own a Visa credit card");

    } else {
        console.log("card number unmached");
    }

    //test if the name is valid
    if (cardOwnerName === "" && cardOwnerName.indexOf(" ") === -1) {
        console.log("Please enter your full name");
    } else {
        console.log("your name is correct");
    }

    //test if the card is expired
    if (onDate(cardExpiryDate)) {
        console.log("your card is on date");
    } else {
        console.log("I'm sorry. Your card is expired.");
    }
}
//find the card number between a given range
function betweenRange(x, min, max) {
    return x >= min && x <= max;
}

//expiry date validation function
function onDate(x) {
    //get month and year
    var dateNow = new Date();
    var month = dateNow.getMonth();
    var year = dateNow.getFullYear().toString().slice(2);
    
    //no needed
    if (x.length === 5 && 
        parseFloat(x.slice(0,2) != NaN) && 
        x[2] === "/" && 
        parseFloat(x.slice(2) != NaN)) {
            return true;
        } else {
            console.log("Please use the year format as indicated");
        }
//re do this
     if (x[0] <= month && x[1] >= year) {
        return true;
    } else {
        console.log ("please insert a valid credit card");
        return false;
    }
}




