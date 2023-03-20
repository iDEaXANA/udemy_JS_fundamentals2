'use strict';

//Functions
// DRY. Don't Repeat Yourself. Functions perfect for making that happen.

// function logger() {
//     console.log('My name is Bilal');
// }

// logger(); //Invoking/Calling/Executing

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(3, 4));

// const orangeJuice = fruitProcessor(0, 7)
// console.log(orangeJuice);
//---------------------------------------------------------------------
//Function declarations Vs Expressions  
// Function without name = anonymous function.
// Expressions produce values.

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge(1998);
// console.log(age1);
//---------------------------------------------------------------------
//Arrow Functions
// [1 LINERS] returns value without having to use return keyword

// const calcAge2 = birthYear => 2037 - birthYear;
// const age2 = calcAge2(1998);
// console.log(age2);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearUntilRetirement(1998, "Bilal"));
//---------------------------------------------------------------------
//Functions calling other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));
//---------------------------------------------------------------------
// Function Review
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

// }
// console.log(yearUntilRetirement(1991, 'Bilal'));
// console.log(yearUntilRetirement(1950, 'Mike'));


//---------------------------------------------------------------------
//Introduction to Arrays
// primitive way is to store each value in a variable

// const friend1 = 'Kiran';
// const friend2 = 'Adam';
// const friend3 = 'Abe';

// const friends = ['Kiran', 'Adam', 'Abe'];
// console.log(friends);

// const years = new Array(2012, 2013, 2014, 2015); // Literal syntax above is common

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // expression is something that produces a value!

// friends[2] = 'Ome';
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = 'Bilal';
// const Bilal = ['firstName', 'MB', 2023 - 1998, 'Student', 'friends'];
// console.log(Bilal);
// console.log(Bilal.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years2 = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[2]);
// const age4 = calcAge(years2[3]);
// const age5 = calcAge(years2[years2.length - 1]);

// console.log(age1, age2, age3, age4, age5);

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[2]), calcAge(years2[3]), calcAge(years2[4])];

// console.log(ages);

//---------------------------------------------------------------------
//Basic Array Operations (Methods)

// const friends = ['Kiran', 'Adam', 'Abe'];

// //Add Elements
// friends.push('Ben'); //logging this alone will show new length
// friends.unshift('Ome'); // puts new element at beginning

// //Remove Elements
// friends.pop(); // Removes last element. Logging this will show removed element
// friends.shift(); // Removes first element
// console.log(friends);

// console.log(friends.indexOf('Adam')); // If non existent, you will get -1

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Kiran')); //Includes uses strict equality

//---------------------------------------------------------------------
// Introduction to Objects

// Objects can be referenced by name! :D
// Keys = properties
// Arrays for more ordered data

// const bilal = {
//     firstName: 'Bilal',
//     lastName: 'MB',
//     birthYear: 1998,
//     age: 2023 - 1998,
//     job: 'Trainee Engineer',
//     friends: ['Kiran', 'Adam', 'Abe'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) { //calcAge = property of bilal object
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () { //calcAge = property of bilal object
//     //     // console.log(this);
//     //     return 2037 - this.birthYear; // You can have jonas.birthYear but what happens if I change name of object?
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age} year old ${this.job}. He ${this.hasDriversLicense ? 'does' : 'does not'} have a driving license :(`
//     },
// };
// console.log(bilal.getSummary());

// console.log(bilal['calcAge'](1998));
//---------------------------------------------------------------------
//Dot Vs Bracket notation

// console.log(bilal.lastName); // Dot
// console.log(bilal['lastName']); // Brackets
// //with bracket notation, you can concatonate with expressions.
// const nameKey = 'Name';
// console.log(bilal['first' + nameKey]);
// console.log(bilal['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Bilal. Choose between firstName, lastName, age and job ');

// console.log(bilal[interestedIn]);

// bilal.location = 'UK';
// bilal['height'] = 195;
// console.log(bilal);

// //Challenge
// // 'Bilal has 3 friends,and his best friend is called Adam'

// console.log(`${bilal.firstName} has ${bilal.friends.length} friends and his best friend is called ${bilal.friends[1]}.`)

//---------------------------------------------------------------------
// Object Methods
// functions = values(expressions)
// this keyword!

//---------------------------------------------------------------------
// Iteration: The for loop
// Assignment; Condition; Iteration

// for (let rep = 1; rep <= 100; rep++) {
//     console.log(`Lifting weights, rep ${rep}!`);
// };

//---------------------------------------------------------------------
// Looping Arrays, Breaking and Continuing 

// const Bilal = [
//     'Bilal',
//     'MB',
//     2023 - 1998,
//     'Student',
//     ['Kiran', 'Abe', 'Adam'],
//     false,
// ];

// const types = [];

// for (let i = 0; i < Bilal.length; i++) {
//     console.log(Bilal[i], typeof Bilal[i]);

//     // types[i] = typeof Bilal[i];
//     types.push(typeof Bilal[i]);
// }

// console.log(types);

// const years = [1998, 2007, 2036, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break.   
// console.log('--- CONTINUE KEYWORD ---')
// for (let i = 0; i < years.length; i++) {
//     if (typeof Bilal[i] !== 'string') continue; // skips non strings

//     console.log(Bilal[i], typeof Bilal[i]);
// }

// console.log('--- BREAK KEYWORD ---')
// for (let i = 0; i < years.length; i++) {
//     if (typeof Bilal[i] === 'number') break; // skips non strings

//     console.log(Bilal[i], typeof Bilal[i]);
// }

//---------------------------------------------------------------------
// Looping Backwards and Loops in Loops

// const Bilal = [
//     'Bilal',
//     'MB',
//     2023 - 1998,
//     'Student',
//     ['Kiran', 'Abe', 'Adam'],
//     false,
// ];

// for (let i = Bilal.length - 1; i >= 0; i--) {
//     console.log(i, Bilal[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
//     }
// }

//---------------------------------------------------------------------
// While Loop

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//RANDOM QUESTIONS FROM APPLICATIONS
// let conversionRatio = ((2 ** 20) * 8) / (10 ** 6) // 1MiB/s > Mbps

// function networkBandwith(transferTime, fileSize) {
//     return Math.ceil(((transferTime / fileSize) * conversionRatio));
// }


// console.log(networkBandwith(1, 1));
// console.log(networkBandwith(12, 101));
// console.log(networkBandwith(16738461734167846, 13));


// function solution(S) {
//     for (let i = 0; i < S.length; i++) {
//         if (S > 1 && S < 200) {
//             return S[i - 1].length;
//         } else if (S[i] == S[i].toUpperCase()) {
//             return S[i].length;
//         } else {
//             return S[i].length;
//         }
//     }
// }

// console.log(solution('Baa0'))
// let A = [35, 42, 56]
// let d = A[0].toString().split('');
// let sum1 = parseInt(d[0] + d[1]);
// console.log(d);
// console.log(sum1);
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
console.log('------------------------------------------------------');