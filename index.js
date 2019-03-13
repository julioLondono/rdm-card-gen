// JavaScript File

 let dealFunction = () => {
  
  // Disable button after click
  
    // document.getElementById("newCards").onclick = function() {
    // //disable
    // this.disabled = true;
    // };
  
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
    let validEntry = false;
      
    if (rango===false || textInput===true) {
      alert("Please enter a number between 2 and 13");
      window.location.reload();  
      return;
    } else {
      
      validEntry =true;
      // console.log("valid entry:" + validEntry );
    }
    
    // if ( validEntry === true) {
    //   window.location.reload();  
    // }
    
    //create the divs based on the amount of cards entered
    for (var i=0; i<inputtxt-1; i++) {
      
      const sourceElement = document.querySelector('.card');
      const destination = document.querySelector('.flex-container');

      const copy = sourceElement.cloneNode(true);
      destination.appendChild(copy);
    }
    
  // create the arrays that will be used by the sorting algoritm
  
  let cardsArray = [];
  let sutesArray = [];
  
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
  let result = [sutesArray, cardsArray];
  return result;
};


let cosas = dealFunction;
 console.log(cosas[0]);

//let sutesArray = dealArrays[0];
//let cardsArray = dealArrays[1];
// console.log("sutes Array= " + sutesArray);
// console.log("Cards Array =" + cardsArray);




