'use strict';

//Functions
/*function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const Algeria = console.log(describeCountry('Algeria', 44.18, 'Algiers'));
const UK = console.log(describeCountry('UK', 67, 'London'));
const Finland = console.log(describeCountry('Finland', 5.54, 'Helsinki'));
*/
//---------------------------------------------------------------------
//Function declarations Vs Expressions
// const currentPopulation = 7900;
// function percentageOfWorld1(inputCountry, population) {
//     return `${inputCountry} has a population of ${population} million people. This represents ${(population / currentPopulation) * 100}% of the world population.`
// };

// const UK = console.log(percentageOfWorld1('United Kingdom', 67));

const currentPopulation = 7900;
// const percentageOfWorld1 = function (inputCountry, population) {
//     return `${inputCountry} has a population of ${population} million people. This represents ${(population / currentPopulation) * 100}% of the world population.`
// };

// const UK = percentageOfWorld1('United Kingdom', 67);
// console.log(UK);

//---------------------------------------------------------------------
//Arrow Functions

// const percentageOfWorld2 = (inputCountry, population) => {
//     return `${inputCountry} has a population of ${population} million people. This represents ${(population / currentPopulation) * 100}% of the world population.`;
// };

// console.log(percentageOfWorld2('US', 67));

//Functions calling other Functions
// function percentageOfWorld3(population) {
//     return (population / currentPopulation) * 100
// };

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld3(population)
//     return ` ${country} has ${population} million people, which is about ${percentage}% of the world.`
// };
// console.log(describePopulation('UK', 67));
// console.log(describePopulation('US', 331.9));
// console.log(describePopulation('UK', 37.08));
//---------------------------------------------------------------------
//Coding Challenge #1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calcAverage(44, 23, 71); // 44, 23, 71... 85, 54, 41
// let scoreKoalas = calcAverage(65, 54, 49);// 65, 54, 49... 23, 34, 27
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins >= (avgKoalas * 2)) {
//         console.log(`Dolphins win! They scored ${avgDolphins} points!`);
//     } else if (avgKoalas >= (avgDolphins * 2)) {
//         console.log(`Koalas win! They scored ${avgKoalas} points!`)
//     } else {
//         console.log(`Neither team wins`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas); // NEITHER, DOLPHINS

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//---------------------------------------------------------------------
//Introduction to Arrays

// const populations = [67, 44, 5.5, 10.3];
// console.log(populations.length === 4);
// const percentagesOfWorld = function (population) {
//     return (population / currentPopulation) * 100
// }
// const percentages = [
//     percentagesOfWorld(populations[0]),
//     percentagesOfWorld(populations[1]),
//     percentagesOfWorld(populations[2]),
//     percentagesOfWorld(populations[3])
// ];

// console.log(percentages);

//---------------------------------------------------------------------
//Basic Array Operations (Methods)

// const y = ['Morocco', 'Tunisia', 'Libya', 'Niger', 'Mali'];

// y.push('Utopia');
// y.pop('Utopia');

// if (y.includes('Germany')) {
//     console.log('Probs an EU country')
// } else {
//     console.log('Probably not a central European country :D')
// }

// y[y.indexOf('Tunisia')] = 'Kingdom of Tunisia'

//---------------------------------------------------------------------
//Coding Challenge #2


// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.20;
//     }
// }
// // console.log(calcTip(100));
// // return billValue >= 50 && billValue <= 300 ? billValue *0.15 : billValue * 0.2; TERNARY OPERATOR

// const bills = [125, 555, 44];
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[bills.length - 1])
// ];
// console.log(tips);

// const total = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2],
// ];
// console.log(total);
//---------------------------------------------------------------------
//Introduction to Objects

// const myCountry = {
//     country: 'Algeria',
//     capital: 'Algiers',
//     language: 'Darija',
//     population: 54,
//     y: ['Morocco', 'Tunisia', 'Libya', 'Niger', 'Mali'],
// }
// console.log(myCountry)
//---------------------------------------------------------------------
//Dot Vs Bracket notation

// console.log(`${myCountry.country} has ${myCountry.population} million people, ${myCountry.y.length} neighbouring countries and a capital called ${myCountry.capital}!`)

//---------------------------------------------------------------------
// Object Methods

//---------------------------------------------------------------------
// Coding Challenge #3
// const Mark = {
//     fullName: 'Mark Helios',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// const John = {
//     fullName: 'John Helios',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// Mark.calcBMI();
// John.calcBMI();

// if (Mark.bmi > John.bmi) {
//     console.log(`${Mark.fullName}'s BMI of ${Mark.bmi} is higher than ${John.fullName}'s BMI of ${John.bmi}`)
// } else {
//     console.log((`${John.fullName}'s BMI of ${John.bmi} is higher than ${Mark.fullName}'s BMI of ${Mark.bmi}`))
// }

//---------------------------------------------------------------------
// Iteration: The for loop

// for (let voter = 1; voter <= 100; voter++) {
//     console.log(`Voter number ${voter} is currently voting :)`)
// }

//---------------------------------------------------------------------
// Looping Arrays, Breaking and Continuing

// const populations = [67, 44, 5.5, 10.3];
// const percentages2 = [];
// const percentagesOfWorld = function (population) {
//     return (population / currentPopulation) * 100
// }

// for (let i = 0; i < populations.length; i++) {
//     // percentages2[i] = percentagesOfWorld(populations[i])
//     percentages2.push(percentagesOfWorld(populations[i]));
// }

// console.log(percentages2);

//---------------------------------------------------------------------
// Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    };
};

//---------------------------------------------------------------------
// While Loop