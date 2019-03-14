// JavaScript File


/////// Esta funcion verifica que el valor entrado es un numero y esta dentro del rango y lo almacena en el HTML///////////////////
document.getElementById("newCards").addEventListener("click", handleInput);
function handleInput() {
  let inputValue = document.querySelector("#numberOfCards").value;
  // console.log("inputValue=" + inputValue);
  //verify if the input is valid
    let textInput = isNaN(inputValue);
      // console.log("is Not a Number= " + textInput);
      
    let rango = false;
    if(inputValue>1 && inputValue<14) {
      rango = true;
    }
    // console.log("rango=" + rango);
    
      let validEntry = false;
      
      if (rango===false || textInput===true) {
        alert("Please enter a number between 2 and 13");
        window.location.reload();  
        validEntry = false;
        return;
      } else {
      
        validEntry =true;
      // console.log("valid entry:" + validEntry );
      }
    
      if ( validEntry === true) {
      // console.log("numero a pasar por la funcion=" + inputValue);
      document.getElementById("result").innerHTML = inputValue;
      return inputValue;
      }
}

//////// Esta funcion lee la cantidad de cartas y crea los divs en el dom con valores aleatorios///////////////////////////////////////
function dealFunction(inputtxt) {
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
  
// generate random values and push them into the array
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
  document.getElementById("newCards").disabled = true;
  return [sutesArray, cardsArray];
} ///// End of Function//////


document.getElementById("newCards").addEventListener("click", createCards);
  function createCards(){
  let inputtxt = document.querySelector("#numberOfCards").value;
  let dealArrays = dealFunction(inputtxt); ///// Call function with parameter inputtxt
  // let faces =dealArrays[0];
  // let valores = dealArrays[1];
  // return [faces, valores];
  // console.log("Faces=" + faces);
  // console.log("Valorees=" + valores);
};
 
////////////////// Sorting Cards///////////////////////////////////////////////

document.getElementById("sortButton").addEventListener("click", sortArray);

function sortArray(){
  
  let arrays = dealFunction();
  let faces = arrays[0];
  let valores = arrays[1];
    console.log("Faces=" + faces);
  console.log("Valorees=" + valores);

  let newValoresArray=[];
  let first= null;
  let second = null;
  let n = valores.length;

  for(var j=0; j<(n-1) ; j++) {
      for(var i =0; i<(n-1); i++) {
        if (valores[i]>valores[i+1]) {
            first= valores[i];
              second= valores[i+1];
              valores[i]=second;
              valores[i+1]=first;
              newValoresArray=valores;
            console.log(newValoresArray);
        }
      }
  }
} /// fin de la funcion