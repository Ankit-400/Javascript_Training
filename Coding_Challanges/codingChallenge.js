// -------------------- SECTION 2 --------------------

// ----- Challenge #1 -----

var massMark = 78,
  heightMark = 1.69;
var massJohn = 92,
  heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// ----- Challenge #2 -----

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark < BMIJohn)
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's! ${BMIMark})`);
// else console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);

// ----- Challenge #3 -----

var scoreDolphins = 96 + 108 + 89 / 3;
var scoreKoalas = 88 + 91 + 110 / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

// ----- Challenge #4 -----

const bill = 275;
var tip = bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

// -------------------- SECTION 3 --------------------

// ----- Challenge #1 -----

var calcAverage = (a, b, c) => (a + b + c) / 3;

var scoreDolphins = calcAverage(44, 23, 71);
var scoreKoalas = calcAverage(65, 54, 49);

var checkWinner = (avgDolphins, avgKoalas) => {
  if (avgKoalas * 2 <= avgDolphins)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("No team wins...");
};

checkWinner(scoreDolphins, scoreKoalas);

// ----- Challenge #2 -----

function calcTip(bill) {
  return bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
}

var bills = [125, 555, 44];

var tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

var totals = [];
totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
totals.push(bills[2] + tips[2]);

// ----- Challenge #3 -----

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);

if (mark.bmi > john.bmi)
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
else
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );

// ----- Challenge #4 -----

function calcTip(bill) {
  return bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
}

function calcAverage(arr) {
  var i = 0,
    sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

for (var i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(calcAverage(totals));

// -------------------- SECTION 5 --------------------

// ----- Challenge #1 -----

const printForcast = (arr) => {
  var str = "... ";
  for (var i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log(str);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -50, 4];

printForcast(data1);

// -------------------- SECTION 9 --------------------

// ----- Challenge #1 -----

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
// const { odds: { team1, x: draw, team2 } } = game;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored...`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

team1 > team2 && console.log("Team1 is most likely to win");
team1 < team2 && console.log("Team2 is most likely to win");

// ----- Challenge #2 -----

for ([goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
let len = Object.keys(game.odds).length;
average /= len;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};

for (const name of game.scored)
  scorers[`${name}`] = scorers[name] ? scorers[name] + 1 : 1;

console.log(scorers);

// ----- Challenge #3 -----

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);
// const s = new Set();
// for (const [a, b] of gameEvents) {
//   s.add(b);
// }
// const events = [...s];

// 2
gameEvents.delete(64);
// console.log(gameEvents);

// 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4
for (const [time, event] of gameEvents) {
  console.log(`[${(time < 45) ? "FIRST" : "SECOND"} HALF] ${time}: ${event}`);
}


// ----- Challenge #4 -----

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const input = document.querySelector('textarea');
// const btn = document.querySelector('button');

// input.placeholder = "Enter Variables...";
// btn.textContent = "Click";

// btn.addEventListener('click', function () {
//   const data = input.value.split(`\n`);
//   var len = data.length, i = 0;
//   var right = "✅";
//   while (i < len) {
//     var temp = data[i].trim().split('_');
//     data[i] = temp[0].toLowerCase() + temp[1][0].toUpperCase() + temp[1].slice(1).toLowerCase();
//     console.log(data[i].padEnd(20) + right);
//     right += "✅";
//     i++;
//   }
// })


// -------------------- SECTION 10 --------------------

// ----- Challenge #1 -----

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//   const prompt = require("prompt-sync")({ sigint: true }); //accepts input in string format
//   const choice = Number(prompt(`${this.question} \n${this.options.join('\n')} \n`));
//   console.log("Entered choice :", choice);

//   if (choice >= 0 && choice <= 3) {
//     this.answers[choice] += 1;
//     this.displayResults();
//   }
//   else console.log("Invalid input...!!!");
// }

// document.body.append(document.createElement('button'));
// const pollBtn = document.querySelector('button');
// pollBtn.textContent = 'Answer poll';

// const askQuestion = poll.registerNewAnswer.bind(poll);
// pollBtn.addEventListener('click', askQuestion);

// poll.displayResults = function () {
//   const type = prompt('Enter formate of poll answer (string or array): ');
//   if (type === 'array') {
//     console.log(this.answers);
//   }
//   else if (type === 'string') {
//     console.log("Poll results are", this.answers.join(','));
//   }
//   else console.log("Invalid type..!!");
// }

// const bonus = {
//   answers: [5, 2, 3]
// }
// const test1 = poll.displayResults.bind(bonus);
// test1();

// bonus.answers = [1, 5, 3, 9, 6, 1];
// const test2 = poll.displayResults.bind(bonus);
// test2();

// ----- Challenge #2 -----

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   const body = document.querySelector('body');
//   body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   })
// })();


// -------------------- SECTION 11 --------------------

// ----- Challenge #1 -----

const checkDogs = function (dogsJulia, dogsKate) {
  const finalDogsJulia = [...dogsJulia];
  finalDogsJulia.splice(dogsJulia.length - 2, 2);
  // finalDogsJulia.splice(-3, 1);
  // finalDogsJulia.splice(0, 1);
  finalDogsJulia.splice(-2);
  // finalDogsJulia.shift();
  const finalMerged = [...finalDogsJulia, ...dogsKate];
  finalMerged.forEach(function (age, i) {
    if (age >= 3) console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ----- Challenge #2 -----

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) { return age <= 2 ? 2 * age : 16 + (age * 4) })
  const adults = humanAges.filter(function (age) { return age >= 18 })
  const average = adults.reduce(function (acc, curr) { return acc + curr }, 0) / adults.length
  return average;
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);

// ----- Challenge #3 -----

const calcAverageHumanAge2 = (ages) =>
  ages
    .map(age => (age <= 2) ? 2 * age : 16 + (age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]), calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));


// ----- Challenge #4 -----

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => dog.reFood = Math.trunc(dog.weight ** 0.75 * 28))

const findOwner = (name) => {
  const filtered = dogs.filter(dog => (dog.owners.includes(name)));
  return filtered;
}
const dogFiltered = findOwner('Sarah');
console.log(dogFiltered);
console.log(`Sarah's dog is eating too ${dogFiltered.reFood > dogFiltered.curFood ? "little" : "much"}`);

const ownersEatTooMuch = dogs.filter(dog => dog.reFood < dog.curFood).map(dog => dog.owners).flat();
const ownersEatTooLittle = dogs.filter(dog => dog.reFood > dog.curFood).flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.reFood));

console.log(dogs.some(dog => (dog.curFood <= dog.reFood * 1.1) && (dog.curFood >= dog.reFood * 0.9)));

const dogsEatingOkayFood = dogs.filter(dog => (dog.curFood <= dog.reFood * 1.1) && (dog.curFood >= dog.reFood * 0.9))
console.log(dogsEatingOkayFood);

const dogSorted = dogs.slice().sort((a, b) => a.reFood - b.reFood)
console.log(dogSorted);


// -------------------- SECTION 14 --------------------

// ----- Challenge #1 -----

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed : ${this.speed}`);
}
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} speed : ${this.speed}`);
}

const car1 = new Car("car1", 20);
const car2 = new Car("car2", 35);

car1.accelerate()
car1.accelerate()
car1.break()
car1.accelerate()

// ----- Challenge #2 -----

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed : ${this.speed}`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} speed : ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.break();

// ----- Challenge #3 -----

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();

// ----- Challenge #4 -----

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate = function () {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);


// -------------------- SECTION 16 --------------------

// ----- Challenge #1 -----


// ----- Challenge #2 -----

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath1) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath1;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error', function () {
      reject(new Error("Image not found!! 💥💥💥"));
    })
  })
}

const wait = function (seconds) {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, seconds * 1000)
  })
}

let currImg;
createImage('img/img-3.jpg')
  .then(img => {
    currImg = img;
    console.log("Img 1 loaded..");
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
    return createImage('img/img-2.jpg')
  })
  .then(img => {
    currImg = img;
    console.log("img 2 loaded..");
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
  })
  .catch(err => console.log(err))


// ----- Challenge #3 -----

// part 1
const loadPause = async function () {
  try {
    let img = await createImage('img/img-2.jpg');
    console.log("Image 1 loaded...");
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    console.log("Image 2 loaded...");
    await wait(2);
    img.style.display = 'none';
  }
  catch {
    console.log(err); // not neccessary to write err in argument of catch
  }
}
// loadPause();

//part2

const laodAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));
  }
  catch {
    console.log(err);
  }
}
laodAll();