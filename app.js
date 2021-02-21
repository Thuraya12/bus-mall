'use strict';

let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let thirdImageElement = document.getElementById('third-image');


let maxAttempts = 25;
let userAttemptsCounter=0;
let firstImageIndex ;
let secondImageIndex;
let thirdImageIndex;



function Products(product,source, repetitions){
    this.product = product;
    this.source = source;
    this.repetitions = repetitions;
    this.votes = 0;
    Products.allImages.push(this);
}

Products.allImages = [];

new Products('bag', 'images/bag.jpg'); 
new Products('banana', 'images/banana.jpg');
new Products('bathroom', 'images/bathroom.jpg');
new Products('boots', 'images/boots.jpg');
new Products('breakfast', 'images/breakfast.jpg');
new Products('bubblegum', 'images/bubblegum.jpg');
new Products('chair', 'images/chair.jpg');
new Products('cthulhu', 'images/cthulhu.jpg');
new Products('dog-duck', 'images/dog-duck.jpg');
new Products('dragon', 'images/dragon.jpg');
new Products('pen', 'images/pen.jpg');
new Products('pet-sweep', 'images/pet-sweep.jpg');
new Products('scissors', 'images/scissors.jpg');
new Products('shark', 'images/shark.jpg');
new Products('sweep', 'images/sweep.png');
new Products('tauntaun', 'images/tauntaun.jpg');
new Products('unicorn', 'images/unicorn.jpg');
new Products('usb', 'images/usb.gif');
new Products('water-can', 'images/water-can.jpg');
new Products('wine-glass', 'images/wine-glass.jpg');

console.log(Products.allImages);

function randomProduct() {
    return Math.floor( Math.random() * Products.allImages.length);
   }

    console.log( Math.floor( Math.random() * Products.allImages.length));


function displayThreeImages() {
 
    firstImageIndex = randomProduct();

    do{
        secondImageIndex=randomProduct();
        thirdImageIndex=randomProduct();
       }while (firstImageIndex === secondImageIndex || firstImageIndex=== thirdImageIndex || secondImageIndex===thirdImageIndex)
     
     
       Products.allImages
       console.log(Products.allImages[firstImageIndex]);
     
       firstImageElement.src = Products.allImages[firstImageIndex].source;
       
       secondImageElement.src = Products.allImages[secondImageIndex].source;
       console.log(thirdImageIndex);

       thirdImageElement.src = Products.allImages[thirdImageIndex].source;
       
     }
     
     
    displayThreeImages();



firstImageElement.addEventListener('click',userClick);
secondImageElement.addEventListener('click',userClick);
thirdImageElement.addEventListener('click',userClick);




function userClick(event) {
  // give the user 10 tries to click after that show result
  userAttemptsCounter++;

  console.log(event.target.id);



  if(userAttemptsCounter<maxAttempts){
    // make sure to add to votes for the correct element and render again
    if(event.target.id ==='first-image'){
      Products.allImages[firstImageIndex].votes++

    }else if(event.target.id === 'second-image'){
      Products.allImages[secondImageIndex].votes++
    }
    else{
        Products.allImages[thirdImageIndex].votes++
    }
    displayThreeImages();

  }
  else{
    // render the list of results
    let list=document.getElementById('results-list');
    let productResult;
    for(let i=0;i<Products.allImages.length;i++){
      productResult=document.createElement('li');
      list.appendChild(productResult);
      productResult.textContent = Products.allImages[i].product+  ' has ' + Products.allImages[i].votes + ' votes';
    
    thirdImageElement.removeEventListener('click',userClick)
    secondImageElement.removeEventListener('click',userClick);
    firstImageElement.removeEventListener('click',userClick);


  }
 

}

}




  let button = document.getElementById('button');
  button.addEventListener('click', result);
  function result(){
    let list=document.getElementById('results-list');
    let productResult;
    for(let i=0;i<Products.allImages.length;i++){
      productResult=document.createElement('li');
      list.appendChild(productResult);
      productResult.textContent = Products.allImages[i].product+  ' has ' + Products.allImages[i].votes + ' votes';
    }


  }


 


