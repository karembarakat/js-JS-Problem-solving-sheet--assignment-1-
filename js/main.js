// Q.1
// var pop = +window.prompt("Please enter a number");

// console.log(pop);

// Q.2


// var program = +window.prompt("Please enter a number");

// if ( program % 3 === 0 && program % 4 === 0 ){ 
//     console.log("Yes");
// }else{console.log("No")};


// Q.3

// var num1 = +window.prompt("Please enter a number");
// var num2 = +window.prompt("Please enter a number");
// if (num1 > num2) {
//     console.log(num1);
// }else{
//     console.log(num2);
// }


// Q.4
// var num1 = +window.prompt("Please enter a number");


    // if(num1 >= 0 ){
    //     console.log("Positive"); 
    // }else{
    //     console.log("Negative");
    // }



// Q.5
// var num1 = +window.prompt("Please enter a number");
// var num2 = +window.prompt("Please enter a number");
// var num3 = +window.prompt("Please enter a number");

// var max = num1;
// if (num2 > max) {
//     max = num2
// }
// if (num3 > max) {
//     max = num3
// }
// console.log(max);

// var min = num1;

// if (num3 < min) {
//     min = num3
// }

// if (num2 < min) {
//     min = num2
// }

// console.log(min);

// Q.6
// var num1 = +window.prompt("Please enter a number");

// if(num1 % 2 === 0){
//     console.log('Even');
// }else{console.log('odd');
// }

// Q.7

// var char = +window.prompt("Enter a character:");

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

// Q.8

// var num = +window.prompt("Please enter a number");
// for (var i = 1; i <= num; i++) {
//     console.log(i);
// }

// Q.9
// var num = +window.prompt("Please enter a number");
// for (var i = 1; i <= 12; i++) {
//     console.log( num * i);
// }


// Q.10
// var num = +window.prompt("Please enter a number");
// for (var i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }    
// }

// Q.11
// var num1 = +window.prompt("Please enter a number");
// var num2 = +window.prompt("Please enter a number");

// console.log(num1 ** num2);

// Q.12

/*
    In file You Said in hint use lopp, i can't see how to use it.
*/

// var num1 = +window.prompt("Enter marks of subject 1");
// var num2 = +window.prompt("Enter marks of subject 2");
// var num3 = +window.prompt("Enter marks of subject 3");
// var num4 = +window.prompt("Enter marks of subject 4");
// var num5 = +window.prompt("Enter marks of subject 5");
// var total = num1 + num2 + num3 + num4 + num5;
// var average = total / 5;
// var percentage = (total / 500) * 100;
// console.log("Total: " + total);
// console.log("Average: " + average);
// console.log("Percentage: " + percentage +"%");

// Q.13
// var monthNum = +window.prompt("Enter Month Number");
// if (monthNum === 1 || monthNum === 3 || monthNum === 5 ||
//     monthNum === 7 || monthNum === 8 || monthNum === 10 ||
//     monthNum === 12) {
//     console.log("31 days");
// } else {
//     if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
//         console.log("30 days");
//     } else {
//         if (monthNum === 2) {
//             console.log("28 days");
//         } 
//     }
// }


// Q.14

// for (var i = 1; i <= 5 ; i++){
//     var mark = +window.prompt("Enter Your Mark");
//     if (mark >= 90 ){
//         var grade = "A"
//     }
//     else if (mark >= 80){
//         var grade = "B"
//     }
//     else if (mark >= 70){
//         var grade = "C"
//     }
//     else if (mark >= 50 ){
//         var grade = "D"
//     }
//     else{
//         var grade = "F"
//     }

//     var order = '';
//     if (i === 1) {
//         order = 'First';
//     }
//     else if (i === 2) {
//         order = 'Second';
//     }
//     else if (i === 3) {
//         order = 'Third';
//     }
//     else if (i === 4) {
//         order = 'Fourth';
//     }
//     else {
//         order = 'Fifth';
//     }
//     console.log("Enter " + order + " mark: " + grade +  " and " + mark  + "%");
// }

// Q.15

// var monthNum = +window.prompt("Enter Month Number");
// switch (monthNum) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("28 days");
//         break;
//     default:
//         console.log("Invalid month number");
// }

//Q.16
// var char = window.prompt("Enter a character:");
// switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }


//Q.17
// var num1 = +window.prompt("Please enter a number");
// var num2 = +window.prompt("Please enter a number");

// switch (true) {
//     case (num1 > num2):
//         console.log(num1 + " is greater than " + num2);
//         break;
//     default:
//         console.log(num2 + " is greater than " + num1);
// }


//Q.18


// var num = +window.prompt("Please enter a number");
// switch (num %2) {
//     case 0:
//         console.log("Number is even");
//         break;
//     default:
//         console.log("Number is odd");
// }





//Q.19

// var num = 4;
// switch (true) {
//     case (num > 0):
//       console.log("Positive");
//       break;
//     case (num < 0):
//       console.log("Negative");
//       break;
//     default:
//       console.log("Zero");
//   }



//Q.20

// var num1 = +window.prompt("enter first number");
// var operator = window.prompt("enter the character");
// var num2 = +window.prompt("enter second number");
// switch (operator) {
//     case '+':
//         console.log(num1 + num2); // Addition
//         break;
//     case '-':
//         console.log(num1 - num2); // Subtraction
//         break;
//     case '*':
//         console.log(num1 * num2); // Multiplication
//         break;
//     case '/':
//         if (num2 === 0 ) {
//             console.log("Cannot divide by zero");
//         } else {
//             console.log(num1 / num2); // Division
//         }
//         break;
//     default:
//         console.log("Invalid operator. Please use +, -, *, or /.");
// }