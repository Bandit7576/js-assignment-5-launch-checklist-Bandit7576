// Write your JavaScript code here!







window.addEventListener("load", function() {



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        result.json().then(function (json) {
            console.log(json);
            let planet = pickPlanet(json);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        });


    });

    const pilot = document.querySelector('input[name=pilotName]').value;
    const form = document.querySelector('form');

    let faultyItems = document.getElementById('faultyItems');
    faultyItems.style.visibility = "hidden";

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        if (validateInput(pilot, copilot, fuelLevel, cargoLevel) === "Is a Number") {
            formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel ) 
        }

    });

 });