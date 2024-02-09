// --------------- Practice Assignments for JavaScript Fundamentals sections ---------------

// ---------- Part 1 ----------

// ----- Values and Variables -----

// 1
const country = "India";
const continent = "Asia";
var population = 10;

// 2
console.log("Country : ", country, "Continent : ", continent, "Population : ", population, "millions");


// ----- Data Types -----

// 1
var isIsland = false;
var language;

// 2
console.log(typeof isIsland, typeof population, typeof country, typeof language);


// ----- let, const and var -----

// 1
language = "english";

// 2
// Country and continent can be changed to constants
// language can be changed to the constant but as it was not initialized at the time of creation, it cannot be the constant type.

// 3
// country = "bharat"
// Re-assignment to the const type variable is not allowed


// ----- Basic Operators -----

// 1
// N is the No. of people live in each half.
var N = population / 2;

// 2
N += 1;
console.log("Increased Population is : ", N, " Millions");

// 3
var populationFinland = 6; //Millions;
console.log("More people than finland? : ", populationFinland < population);

// 4
var avgPopulation = 33; //Millions
console.log("Less people than average country people? : ", avgPopulation < population);

// 5
var description = "India is in Asia, and its 10 million people speak English";


// ----- Strings and Template Literals -----

// 1
var description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


// ----- Taking Decisions: if / else Statements -----

// 1
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} million below average`);

// 2
population = 13
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} million below average`);

population = 130
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} million below average`);

population = 10;


// ----- Type Conversion and Coercion -----

// 1 & 2
console.log('9' - '5');     //  4
console.log('19' - '13' + '17');    //  617
console.log('19' - '13' + 17);  //  23
console.log('123' < 57);  //  false
console.log(5 + 6 + '4' + 9 - 4 - 2);   //  1143


// ----- Equality Operators: == vs. === -----

// 1
// const prompt=require("prompt-sync")({sigint:true}); //accepts input in string format
// var numNeighbours = prompt('How many neighbour countries does your country have?');

// 2,3,4,5,6,7,8
// console.log(typeof numNeighbours);
// if(numNeighbours===1) console.log('Only 1 border!');
// else if(numNeighbours>1) console.log('More than 1 border');
// else console.log('No borders');

// Unwanted behaviour of output is because the prompt will take entered input in the form of string only and not int the form of number. 
// When we use ===, along with its value the type will also be checked, so we are getting the different output as expected. In case of == string will be converted to number for comparison with 1(condition of if statement).
// if we convert numNeighbours to number then we will get utput as expected.


// ----- Logical Operators -----

// 1,2,3,4,5
if (language === 'english' && population < 50 && !isIsland)
    console.log(`You should live in ${country} :)`);
else console.log(`Portugal does not meet your criteria :(`);


// ----- The switch Statement -----


switch (language) {
    case "chinese":
    case "mandarin":
        console.log("Most number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case arabic:
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}


// ----- The Conditional (Ternary) Operator -----


// 1
console.log((population > 33) ? `${country}'s population is above average.` : `${country}'s population is below average.`);
// (population>33) ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

// 2
population = 13
console.log((population > 33) ? `${country}'s population is above average.` : `${country}'s population is below average.`);

population = 130
console.log((population > 33) ? `${country}'s population is above average.` : `${country}'s population is below average.`);
population = 10;


// ---------- Part 2 ----------

// -----  Functions -----

// 1
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// 2
var country1 = describeCountry("India", 20, "Delhi");
var country2 = describeCountry("USA", 13, "Washington");
var country3 = describeCountry("Finland", 11, "Helsinki");
console.log(country1, '\n' + country2, '\n' + country3);


// ----- Function Declarations vs. Expressions -----

// 1,2,3
function percentageOfWorld1(population) {
    return 100 * (population / 7900);
}
var indiaPer = percentageOfWorld1(20);
var usPer = percentageOfWorld1(13);
var finlandPer = percentageOfWorld1(11);
console.log(indiaPer, '\n' + usPer, '\n' + finlandPer);

// 4
var percentageOfWorld2 = function (population) {
    return 100 * (population / 7900);
}
var indiaPer = percentageOfWorld2(20);
var usPer = percentageOfWorld2(13);
var finlandPer = percentageOfWorld2(11);
console.log(indiaPer, '\n' + usPer, '\n' + finlandPer);


// ----- Arrow Functions -----

// 1
var percentageOfWorld3 = (population) => {
    return 100 * (population / 7900);
}
var indiaPer = percentageOfWorld3(20);
var usPer = percentageOfWorld3(13);
var finlandPer = percentageOfWorld3(11);
console.log(indiaPer, '\n' + usPer, '\n' + finlandPer);


// -----  Functions Calling Other Functions -----

// 1
const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}
console.log(describePopulation("India", 20));
console.log(describePopulation("US", 18));
console.log(describePopulation("Finland", 14));


// -----  Introduction to Arrays -----

// 1
const populations = [20, 10, 24, 16];

// 2
console.log("Array has 4 elements? : ", populations.length == 4);

// 3
const percentages = []

percentages[0] = percentageOfWorld1(populations[0]);
percentages[1] = percentageOfWorld1(populations[1]);
percentages[2] = percentageOfWorld1(populations[2]);
percentages[3] = percentageOfWorld1(populations[3]);


// ----- Basic Array Operations (Methods) -----

// 1
const neighbours = ["Bangladesh", "Nepal", "Tibet", "Pakistan"]

// 2
neighbours.push("Utopia");

// 3
neighbours.pop()

// 4
if (!neighbours.includes("Germany")) console.log('Probably not a central European country :D');

// 5
neighbours[neighbours.indexOf("Pakistan")] = "Shi-Lanka";


// ----- Introduction to Objects -----

// 1
const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "English",
    population: 20,
    neighbours: ["Shri-Lanka", "Bangladesh", "Nepal", "Tibet"]
}


// -----  Dot vs. Bracket Notation -----

// 1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// 2
myCountry.population += 2;
myCountry["population"] -= 2;


// ----- Object Methods -----

// 1
myCountry.describe = function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
}

// 2
myCountry.describe();

// 3
myCountry.checkIsland = function () {
    this.isIsland = (this.neighbours.length == 0) ? true : false;
}
myCountry.checkIsland();
console.log(myCountry);

// ----- Iteration: The for Loop -----

// 1
for (var i = 0; i < 50; i++)
    console.log(`Voter number ${i + 1} is currently voting`);


// ----- Looping Arrays, Breaking and Continuing -----

// 1

const percentages2 = [];

for (var i = 0; i < populations.length; i++)
    percentages2[i] = percentageOfWorld1(populations[i]);

// Both percentages and percentages2 has exactly same values
console.log(percentages, percentages2);


// ----- Looping Backwards and Loops in Loops -----

// 1
var listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

// 2 & 3
for (var i = 0; i < listOfNeighbours.length; i++)
    for (var j = 0; j < listOfNeighbours[i].length; j++)
        console.log("Neighbour : ", listOfNeighbours[i][j]);


// ----- The while Loop -----

// 1
const percentages3 = [];

var i = 0;
while (i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    i++;
}
