// JavaScript File

function dealFunction() {




// const corazon = "C:\Code-4Geeks\Ramdom Card Gen\Resources\images/hearts.jpg";
// const diamante ="C:\Code-4Geeks\Ramdom Card Gen\Resources\images/diamond.jpg";
// const picas ="C:\Code-4Geeks\Ramdom Card Gen\Resources\images/pica.jpg";
// const trebol ="C:\Code-4Geeks\Ramdom Card Gen\Resources\images/trebol.jpg";

let sutesRand = Math.floor(Math.random() * 4) + 1;
console.log(sutesRand);

let valueRand = Math.floor(Math.random() * 13) + 1;
console.log(valueRand);

switch (sutesRand) {
  case 1:
    document.querySelector("img").src = "/resources/images/diamond.jpg" ;
    break;
  case 2:
    document.querySelector("img").src = "/resources/images/hearts.jpg";
    break;
    case 3:
    document.querySelector("img").src = "/resources/images/pica.jpg";
    break;
    case 4:
    document.querySelector("img").src = "/resources/images/trebol.jpg";
    break;
  default:
   console.log("Error finding the image");
}

switch (valueRand) {
  case 11:
    document.querySelector("p").innerHTML = "J";
    break;
  case 12:
    document.querySelector("p").innerHTML = "Q";
    break;
  case 13:
    document.querySelector("p").innerHTML = "K";
    break;
  default:
   document.querySelector("p").innerHTML = valueRand;
}

}
 
