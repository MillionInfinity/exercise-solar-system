
console.log("planet Earth my favorite channel");
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    - Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(function(planet){
    planetEl.style.color="gray"
    planetEl.innerHTML += `<h1> ${planet}</h1>`
   
 });
     console.log(planets);

  /*  Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalize_Words= planets.map(function(solar) {
   return solar.charAt(0).toUpperCase()+ solar.slice(1);
  
});
// capitalize_Words.innerHTML = `<h2> ${solar}</h2>`
console.log("capitalize_Words", capitalize_Words); 
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let ePlanets = [];
planets.forEach(function (planet) {
    if (planet.includes("e")) {
        ePlanets.push(planet);
    }
});
console.log("ePlanets:", ePlanets);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let sentence = words.reduce(function (moon, sun) {
        return moon + " " + sun
    });

console.log("sentence", sentence);