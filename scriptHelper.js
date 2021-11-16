// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
}
// on implementing formSubmission
//this formSubmission function will be invoked inside the
//form submit event listener in script.js to validate all inputs
// has 6 parameters:
/*  document, which is the document object so you just pass it document as 
        its first parameter when you invoke it
    list, which is the faultyItems div
    pilot, which is the value of our pilotName input
    copilot, which is the value of our copilotName inpu
    fuel level, value of fuelLevel input
    cargoLevel, value of cargoMass input

    pilotName
    copilotName
    fuelLevel
    cargoMass
*/


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // given these inputs, what are our conditions?
    // this should be a sizeable series of if/else blocks
    /* CONDITION 1: ALL FIELDS REQUIRED!
        if any value is empty we need to send alert that reads "all fields required!"*/
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        } else if (
        pilotName.value
        ) 


    /* CONDITION 2: use inNaN to make sure data inputted in each field is correct datatype
        ~ if pilotName or copilotName are numbers, alert "Please enter names, not numbers!
        ~ if fuel level and/or cargoLevel are not numbers, alert "please enter valid numbers, please!
        
        /*refer to the hint on using isNaN function : If you want to check if something is NaN, you 
        cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value)
         that returns true if value is NaN and false if value is not NaN.*/
   /* based on these conditions, if we have gotten to this point and haven't had to alert the user
    that they entered bad DataTransfer, we can assume we have validated the input and we are 
    good to go to start checking our fuel and cargo levels updating our HTML accordingly*/
    //what if cargoMass <10000 and fuel level is <10000 - fuelLevel is too low, faultyItems list parameter should become visible
    //what if cargoMass >10000 and fuel level is <10000 - fuelLevel is too low, cargoMass is too high, faultyItems list parameter should become visible
    //what if cargoMass >10000 and fuel level is >10000 - cargoMass too high, faultyItems list parameter should become visible


    // in any of these cases our list parameter (faultyItems) should become visible also the pilotstatus and copilotstatus text should be updated using a template literal that would read something like 'nameOfPilot is ready for launch'
    //The pilotStatus and copilotStatus text should be updated using a template literal 
    //that would read something like "nameOfPilot is ready for launch"
    //How do we update the text/html inside of an HTML element?
    // Do we already have the pilotStatus and copilotStatus HTML elements selected, or
    // do we still need to select those to update them?


    //if we are ready for launch that means we have enough fuel and our cargo mass is low enough
    //what if cargoMass <10000 and fuel level is >10000 - perfect!

    //in any other case, we are not ready for launch.

    //we'll need to update the 
    //launchStatus text and color to reflect whether or not we are ready for launch as well
    // just like pilotStatus and copilotStatus, do we need to select launchStatus?

    //select all necessary elements BEFORE running the conditionals for organization!



   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
