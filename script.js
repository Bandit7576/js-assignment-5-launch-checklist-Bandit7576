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
    // .then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // });
    
    
 });