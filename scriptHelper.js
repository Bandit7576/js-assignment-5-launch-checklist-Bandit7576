// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    return  `
            <h2>Mission Destination</h2>
        <ol>
            <li>Name:${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">
        `;
  
}

function validateInput(testInput) {
   if (testInput.trim() === '') {
    console.log("Empty");
   } else if (isNaN(testInput)) {
    console.log( "Not a Number");
   } else {
    console.log("Is a Number");
   }
}
validateInput('5');

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned =   await  fetch('https://handlers.education.launchcode.org/static/planets.json');



    // response.json().then( function(json) {
    //     console.log(json);
    //     planetsReturned = json;
    //     console.log(planetsReturned);
    // });
//    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let one = Math.floor(Math.random() * planets.length);
    let planet = planets[one];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
