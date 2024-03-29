//Chap 26 (Rounding Number)

// Q1
var roundedNumber = round(3.7);

// Q2
origNum = 3.7
roundNum = math.ceil(origNum)

// Q3
origNum = 3.7
roundNum = math.floor(origNum)

// Q4
origNum = 3.7
roundNum = round(origNum)

// Q5
roundNum = math.floor(0.5)
console.log(roundNum)

//Chap 27 (Random Numbers)

// Q1
var randomNumber = Math.floor(Math.random() * 50) + 1;

// Q2
var randomNumber = Math.random();

// Q3
var diceResult = Math.floor(Math.random() * 6) + 1;
console.log("You rolled:", diceResult);

// Q4
var tossResult = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("The coin landed on:", tossResult);





// Chap 28, 29 (Converting Strings)

// Q1
var str = "42";
var num = parseInt(str);

// Q2
var integer = convertStringToInt("123");
console.log(integer); 

// Q3
var str = "3.14";
var num = parseFloat(str);

// Q4


// Q5
var number = 123;
var str = number.toString();
console.log(str); 

// Q6
var result = convertNumberToString();
console.log(result); 

// Q7  
var decimalStr = "3.14";
var integer = parseInt(decimalStr);



// Chap (Controlling the length of decimals)

// Q1
var num = 3.141592653589793238;
var newNum = num.toFixed(4);

// Q2
var num = 3.141592653589793238;
num = Number(num.toFixed(2));

// Q3
if ((num.toFixed(2)).toString().length > 4) {
    
}

// Q4
var originalNumber = 3.141592653589793238; // A number with many decimal places
alert(originalNumber.toFixed(2));



















