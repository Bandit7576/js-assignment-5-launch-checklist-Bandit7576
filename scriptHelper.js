// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
        const missionTarget = document.getElementById('missionTarget');

        missionTarget.innerHTML =   `
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

function validateInput(pilot, copilot, fuelLevel, cargoLevel) {
   if (pilot === '' || copilot === '' || fuelLevel === '' || cargoLevel === '') {
    alert("All fields are required!");
    return "Empty";

   } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert("Please enter valid information for each field!");
    return "Not a Number";

   } else {
    return "Is a Number";
   }
}


function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel) {
   faultyItems.style.visibility = "visable";
   let pilotStatus = document.getElementById('pilotStatus');
   console.log(pilot);
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   let copilotStatus = document.getElementById('copilotStatus');
   console.log(copilot);

   copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`;
   let fuelStatus = document.getElementById('fuelStatus');
   console.log(fuelStatus);

   let cargoStatus = document.getElementById('cargoStatus');
   console.log(cargoStatus);

   let launchStatus = document.getElementById("launchStatus");
   console.log(launchStatus);


   if (fuelLevel < 10000 && cargoLevel <= 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";

   } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";

   } else if (fuelLevel < 10000 && cargoLevel > 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";

   } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";

   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned =   await  fetch('https://handlers.education.launchcode.org/static/planets.json');

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
