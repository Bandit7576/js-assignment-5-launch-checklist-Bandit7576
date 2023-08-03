// Write your JavaScript code here!





window.addEventListener("load", function() {



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        result.json().then(function (json) {
            console.log(json);
            const missionTarget = document.getElementById('missionTarget');
            let planet = pickPlanet(json);
            missionTarget.innerHTML = addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        });


    });

    const form = document.querySelector('form');
    const pilot = document.querySelector('input[name=pilotName]').value;

    
    const faultyItems = document.getElementById('faultyItems');
    faultyItems.style.visibility = hidden;

    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

    });

 });