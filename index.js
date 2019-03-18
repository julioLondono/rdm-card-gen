// window.onLoad = () => {
    
document.querySelector(".clickMe").addEventListener("click", () => {generateRandomCard()}, false);

<<<<<<< HEAD
//funcion generateRandomSute
let generateRandomNumbers =() => {

// clear the DOM if a card is already there
if(document.querySelector(".card"))
{
    // get elements
    var child = document.querySelector(".card");
    var parent = document.querySelector(".container");
    // Delete child
    parent.removeChild(child);
}
    
  let randSute = Math.floor(Math.random() * 4) + 1;
  let randValue = Math.floor(Math.random() * 13) + 1;
  console.log("randSute inside function generateRandomSute=" + randSute);
  console.log("randValue inside function generateRandomSute=" + randValue);
  return [randSute, randValue];
}; /// cierre de la funcion generateRandomNumbers
//funcion dealFunction
let generateRandomCard = () => {
=======
function dealFunction() {
  
  let cardsArray = [];
  let sutesArray = [];
  
  // Disable button after click
  
     document.getElementById("newCards").onclick = function() {
    //disable
    this.disabled = true;
     };
  
  // Read value from the input
    let inputtxt = document.querySelector("#numberOfCards").value;
      // console.log("input=" + inputtxt);
  //verify if the input is valid
    let textInput = isNaN(inputtxt);
      // console.log("isNaN" + textInput);
      
    let rango = false;
    if(inputtxt>1 && inputtxt<14) {
      rango = true;
    }
    
    // console.log("rango=" + rango);
      
    if (rango===false || textInput===true) {
      alert("Please enter a number between 2 and 13");
        window.location.reload();  
        return;
     } else {
      let validEntry = true;
      // console.log("valid entry:" + validEntry );
    }
    
    //create the divs based on the amount of cards entered
    for (var i=0; i<inputtxt-1; i++) {
      const sourceElement = document.querySelector('.card');
      const destination = document.querySelector('.flex-container');

      const copy = sourceElement.cloneNode(true);
      destination.appendChild(copy);
    }
    
  // generate random values
  let divs = document.querySelectorAll(".card");
    // console.log(divs);

  for (var i = 0; i < divs.length; i++) {
    // console.log(divs[i]);
    
    let sutesRand = Math.floor(Math.random() * 4) + 1;
    // console.log(sutesRand);
    sutesArray.push(sutesRand);
    

    let valueRand = Math.floor(Math.random() * 13) + 1;
    // console.log(valueRand);
    cardsArray.push(valueRand);
    
    
    
  // assign the face of the card based on a random value
    switch (sutesRand) {
      case 1:
        divs[i].querySelector(".fondo").src = "/resources/images/diamondSmall.jpg" ;
        break;
      case 2:
        divs[i].querySelector(".fondo").src = "/resources/images/heartsSmall.jpg";
        break;
        case 3:
        divs[i].querySelector(".fondo").src = "/resources/images/picaSmall.jpg";
        break;
        case 4:
        divs[i].querySelector(".fondo").src = "/resources/images/trebolSmall.jpg";
        break;
      default:
      console.log("Error finding the image");
    }
// assign the value of the card based on a random value
    switch (valueRand) {
      case 11:
        divs[i].querySelector(".centered").innerHTML = "J";
        break;
      case 12:
        divs[i].querySelector(".centered").innerHTML = "Q";
        break;
      case 13:
        divs[i].querySelector(".centered").innerHTML = "K";
        break;
      default:
      divs[i].querySelector(".centered").innerHTML = valueRand;
    }
  }
  // console.log("sutes Array= " + sutesArray);
  // console.log("Cards Array =" + cardsArray);
  return [sutesArray, cardsArray];
}

let dealArrays = dealFunction();
let sutesArray = dealArrays[0];
let cardsArray = dealArrays[1];

  console.log("sutes Array= " + sutesArray);
  console.log("Cards Array =" + cardsArray);
>>>>>>> 016c71d1459ea6b3672e667288af10026ce568a7

    let randomNumbers = generateRandomNumbers();                //call the random number generator function
    let Sute = randomNumbers[0];
    let Value = randomNumbers[1];
    
        // console.log("sute=" + Sute);
        // console.log("value=" + Value);

    let x=null;
    switch(Sute) {
    case 1:
        x = "&#x2660"; /// spades hex &#x2660
        break;
    case 2:
        x = "&#x2663"; ///  clubs hex &#x2663
        break;
    case 3:
        x = "&#x2665";  ///  hearts hex &#x2665
        break;
    case 4:
        x = "&#x2666";  ///  diamonds hex &#x2666
        break;
    }
    let y = null;
    switch(Value) {
    case 1:
        y = "A";
        break;
    case 11:
        y = "J";
        break;
    case 12:
        y = "Q";
        break;
    case 13:
        y = "K";
        break;
    default:
        y = Value;
    }

<<<<<<< HEAD
// create the following HTML elements in the DOM inside Container
// <div class="card">
//       <p class="nw"> x </p>
//       <p class="value"> y </p>
//       <p class="se"> x </p>
//  </div>

    var card = document.createElement("div");                       // Create a <div> node
    card.className = "card";                                        // Assign a Class to the element
    var nw = document.createElement("p");                          // Create an element
    nw.className = "nw";
    var face = document.createElement("p");                        // reate an element
    face.className = "value";   
    var se = document.createElement("p");                          // reate an element
    se.className = "se";
    card.appendChild(nw);                                           // Append the text to <div>
    card.appendChild(face);                                         // Append the text to <div>
    card.appendChild(se);                                           // Append the text to <div>
    document.querySelector(".container").appendChild(card);         // Append <div> to <div> with id="container"
    document.querySelector(".nw").innerHTML = x;
    document.querySelector(".value").innerHTML = y;
    document.querySelector(".se").innerHTML = x;

    if(x==="&#x2665" || x==="&#x2666") {                            // convert the red sutes to red
        document.querySelector(".nw").style.color = "red";
        document.querySelector(".se").style.color = "red";
    }
    

}; ///cierre de funcion generateRandomNumbers

// };/// cierre de funcion onLoad
=======





>>>>>>> 016c71d1459ea6b3672e667288af10026ce568a7
