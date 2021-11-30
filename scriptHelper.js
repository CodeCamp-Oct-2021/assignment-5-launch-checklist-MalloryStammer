// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.

  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}">`;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let alertRequired = "All fields are required!";
  let alertValid =
    "Please enter valid text for names and integers for fuel and cargo mass!";
  let faultyItemsVar = document.getElementById("faultyItems");
  let launchStatusVar = document.getElementById("launchStatus");
  let pilotStatusVar = document.getElementById("pilotStatus");
  let copilotStatusVar = document.getElementById("copilotStatus");
  let fuelStatusVar = document.getElementById("fuelStatus");
  let cargoStatusVar = document.getElementById("cargoStatus");
  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert(alertRequired);
  } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert(alertValid);
  } else if (!isNaN(pilot) || !isNaN(copilot)) {
    alert(alertValid);
  } else if (cargoLevel < 10000 && fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatusVar.innerHTML = "Shuttle not ready for launch";
    launchStatusVar.style.color = "red";
    pilotStatusVar.innerHTML = `${pilot} is ready for launch`;
    copilotStatusVar.innerHTML = `${copilot} is ready for launch`;
    fuelStatusVar.innerHTML = `${fuelLevel} is too low to launch`;
    cargoStatusVar.innerHTML = `${cargoLevel} is within range and ready to launch`;
  } else if (cargoLevel > 10000 && fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatusVar.innerHTML = "Shuttle not ready for launch";
    launchStatusVar.style.color = "red";
    pilotStatusVar.innerHTML = `${pilot} is ready for launch`;
    copilotStatusVar.innerHTML = `${copilot} is ready for launch`;
    fuelStatusVar.innerHTML = `${fuelLevel} is too low to launch`;
    cargoStatusVar.innerHTML = `${cargoLevel} is too high to launch`;
  } else if (cargoLevel > 10000 && fuelLevel > 10000) {
    list.style.visibility = "visible";
    launchStatusVar.innerHTML = "Shuttle not ready for launch";
    launchStatusVar.style.color = "red";
    pilotStatusVar.innerHTML = `${pilot} is ready for launch`;
    copilotStatusVar.innerHTML = `${copilot} is ready for launch`;
    fuelStatusVar.innerHTML = `${fuelLevel} is within range and ready to launch`;
    cargoStatusVar.innerHTML = `${cargoLevel} is too high to launch`;
  } else if (cargoLevel < 10000 && fuelLevel > 10000) {
    /*everything ready and good*/
    list.style.visibility = "visible";
    launchStatusVar.innerHTML = "Shuttle is ready for launch";
    launchStatusVar.style.color = "green";
    //could i just make these elements below visible? This text is in HTML
    pilotStatusVar.innerHTML = `${pilot} is ready for launch`;
    copilotStatusVar.innerHTML = `${copilot} is ready for launch`;
    fuelStatusVar.innerHTML = `${fuelLevel} is within range and ready to launch`;
    cargoStatusVar.innerHTML = `${cargoLevel} is within range and ready to launch`;
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(listedPlanets) {
  let randomIndex = Math.floor(
    Math.random(listedPlanets) * listedPlanets.length
  );
  return listedPlanets[randomIndex];
}

//use innerHTML

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
