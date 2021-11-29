// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()** DONE
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Why two console logs^^?
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let destinationPlanet = pickPlanet(listedPlanets);

      missionTarget.style.visibility = "visible";

      missionTarget.innerHTML = `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${destinationPlanet.name}</li>
            <li>Diameter: ${destinationPlanet.diameter}</li>
            <li>Star: ${destinationPlanet.star}</li>
            <li>Distance from Earth: ${destinationPlanet.distance}</li>
            <li>Number of Moons: ${destinationPlanet.moons}</li>
        </ol>
        <img src="${destinationPlanet.image}">`;
    });
});

//On Adding Validation
//we're already inside window load event listener, so don't make a new one
//(you should only ever have one!)
//before we worry about validating these inputs, we need to
//select the form and listen for the submit event
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //prevent default should be the first thing in the form event listener
  let pilotNameVar = document.getElementById("pilotName").value;
  let copilotNameVar = document.querySelector("input[name= copilotName]").value;
  let fuelLevelVar = document.querySelector("input[name= fuelLevel]").value;
  let cargoMassVar = document.querySelector("input[name= cargoMass]").value;
  let faultyItemsVar = document.getElementById("faultyItems");
  formSubmission(
    document,
    faultyItemsVar,
    pilotNameVar,
    copilotNameVar,
    fuelLevelVar,
    cargoMassVar
  );
});
