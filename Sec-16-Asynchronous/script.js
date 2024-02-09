'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function renderCountry(data, classname = "") {
    const html = `<article class="country ${classname}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data" >
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages?.eng || "English (default)"}</p >
    </div >
  </article > `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


// Request to API using XMLHttp request
// const request = new XMLHttpRequest();
// request.open('GET', "https://restcountries.com/v3.1/name/bharat");
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // this -> request
//     renderCountry(data);
// })

// Suppose we want to load another country after the first country loaded, then we have to write another event listner inside first one's callback. Doing this for multiple contries itself is called callback hell.
// Solution is Promises

// Request using fetch

// fetch("https://restcountries.com/v3.1/name/germany")
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Multiple fetch methods, chaining promises and throwing logical errors

const getJSON = function (url, errMsg = "Something went wrong!!") {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(errMsg + ' 💥💥💥')
            return response.json();
        })
}

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found!!")
        .then(([data]) => {
            renderCountry(data);
            console.log(data);
            const neighbour = data.borders[0];
            if (!neighbour) throw Error("Neigbour not found!!")
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Neighbour not found!!")
                .then(([data]) => {
                    renderCountry(data, "neighbour");
                    const neighbour = data.borders[0];
                    if (!neighbour) throw Error("Neigbour not found!!")
                    return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Neighbour not found!!")
                        .then(([data]) => {
                            renderCountry(data, "neighbour");
                            const neighbour = data.borders[0];
                            if (!neighbour) throw Error("Neigbour not found!!")
                            getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Neighbour not found!!")
                                .then(([data]) => {
                                    renderCountry(data, "neighbour")
                                })
                        })
                })
        })
        .catch(err => alert(err))
        .finally(console.log("Completed"))
}
// default catch can be added in chaining of then at last for any error in any then(), it can also be applied to each then individually.
// fetch.then(response => responseFun, err => errorHandle), or
// fetch.then(response => responseFun).catch(err => print(err))

// getCountryData("portugal");
// getCountryData("australia");
// getCountryData("germany");
// getCountryData("arab");
// getCountryData("america");
// getCountryData("russia");

// btn.addEventListener('click', function () {
//     getCountryData("south africa");
// })


// -------------------- SECTION 16 --------------------

// ----- Challenge #1 -----


function getCountry(lat, lng) {
    console.log(lat, lng);
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => console.log("You are in ", data.city, ", ", data.country, "."));
}

const whereAmI = function (lat, lng) {
    setTimeout(getCountry.bind(this, lat, lng), 1000);
}

// whereAmI(19.037, 72.873);
// whereAmI(52.508, 13.381);

console.log("------------------------------------------");

// Promise.all() => Multiple asynchronous operations at the same timeand operations that don't depend on the another, then always run them in parallel using Promise.all.
async function getMeData(c1, c2, c3) {
    // const [data] = await getJSON(`https://restcountries.com/v3.1/name/${country}`);
    // console.log(data);

    // TO fetch data for multiple countries simultaneously, as they are independent of one another...
    const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ]);
    console.log(data.map(d => d[0].capital));

}

// getMeData('portugal', 'japan', 'indonesia');

// Other combinators
// Promise.race => it will settled as soon as one of the input promises settles. Settled simply meansthta value is available, it doesn't matter it the promise is rejected or fullfilled. SO basically first settled promise wins the race

// (async function () {
//     const data = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/japan`),
//         getJSON(`https://restcountries.com/v3.1/name/nepal`),
//         getJSON(`https://restcountries.com/v3.1/name/china`)
//     ])
//     console.log("res from race : ", data);
// })()

// If user request is taking too uch time then reject the promise...

const timeout = function (mSec) {
    return new Promise(function (_, reject) {
        setTimeout(() => { reject('Timeout!!!......Try again') }, mSec)
    })
}
// const data = Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/china`),
//     timeout(5)
// ])
// data.then(data => console.log("data without timeout : ", data))
//     .catch(err => console.error(err));


// Promise.all shortcircuits as soon as one promise rejects, Promise.allSettled never short circuits.

// const data1 = Promise.all([
//     getJSON(`https://restcountries.com/v3.1/name/japan`),
//     getJSON(`https://restcountries.com/v3.1/name/nepal`),
//     getJSON(`https://restcountries.com/v3.1/name/china`),
//     // timeout(10)
// ])
//     .then(data => console.log("promise.all : ", data), err => console.log("promise.all : ", err))
// Everytime it will print timeout only, as last promise will be always rejected.

// const data2 = Promise.allSettled([
//     getJSON(`https://restcountries.com/v3.1/name/japan`),
//     getJSON(`https://restcountries.com/v3.1/name/nepal`),
//     getJSON(`https://restcountries.com/v3.1/name/china`),
//     timeout(1)
// ])
//     .then(data => {
//         console.log("promise.allASettled : ", data);
//         data.forEach((value) => console.log(value))
//     }, err => console.log("promise.allASettled : ", err))

// It will print array of all the responses, irrespective of that promose is rejected or resolved. 


const data3 = Promise.any([
    getJSON(`https://restcountries.com/v3.1/name/japan`),
    getJSON(`https://restcountries.com/v3.1/name/nepal`),
    getJSON(`https://restcountries.com/v3.1/name/china`),
    timeout(10)
])
    .then(data => console.log("promise.any : ", data), err => console.log("promise.any : ", err))
// rejected promises are ignored. Result will always be first resolved promise. (unless all promises rejects)
