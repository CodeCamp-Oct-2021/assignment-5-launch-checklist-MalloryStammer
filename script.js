// Write your JavaScript code here!

window.addEventListener("load", function () {
  //   let listedPlanets;
  //   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  //   let listedPlanetsResponse;
  //   listedPlanetsResponse
  //     .then(function (result) {
  //       listedPlanets = result;
  //       console.log(listedPlanets);
  //     })
  //     .then(function () {
  //       console.log(listedPlanets);
  // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  // });
  //On Adding Validation
  //we're already inside window load event listener, so don't make a new one
  //(you should only ever have one!)
  //before we worry about validating these inputs, we need to
  //select the form and listen for the submit event
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    //default behavior is that when we submit HTML forms, the form
    //sends an HTTP request and refreshes the page
    //we don't want this to happen, we just want the code in our
    //form submit event listener to execute
    event.preventDefault();
    //prevent default should be the first thing in the form event listener

    //we now need to validate form inputs using the DOM and some conditionals (formSubmission function)
    //we are going to use the formSubmission function to validate the inputs
    //of each of our form input: pilotName, copilotName, fuelLevel, cargoMass
    //before we can validate the input values we need to select
    //all of the form values with the DOM  - use crew selector or validatebyid-(look at 25.9.2)
    //let input1= select an input here
    
    

    //we'll want to do this four times, once for each element
    //now that we have all form input elements selected,
    //we can pass their VALUES****** into our formSubmission function
    //very important to understand the difference between an
    //HTML element and its value!!!  
    //theres an entire element for pilot name in the HTML called "pilotName"
    //this is where we will eventually invoke our formSubmission function
    //alert("Warning: all fields required!")
   //alert("Please enter text for names and valid integers for fuel and cargo mass!")

  });
});
