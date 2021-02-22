'use strict';

let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let thirdImageElement = document.getElementById('third-image');



let maxAttempts = 25;
let userAttemptsCounter=0;
let firstImageIndex ;
let secondImageIndex;
let thirdImageIndex;
let productNames=[];
let productVotes=[];
let productShown=[];

function ifRepeat(a, b, c){
  let threevar=[a, b, c]
  for(let i=0; i<threevar.length; i++){
     if(a===b || a===c || b===c) { return true;

     }
     else{return false}
  }
}

console.log(ifRepeat())
ifRepeat(firstImageIndex,secondImageIndex,thirdImageIndex);






function Products(product,source, repetitions){
    this.product = product;
    this.source = source;
    this.repetitions = repetitions;
    this.votes = 0;
    this.shown=0;
    Products.allImages.push(this);
    productNames.push(product)
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
       }while (firstImageIndex === secondImageIndex || firstImageIndex=== thirdImageIndex || secondImageIndex===thirdImageIndex || ifRepeat(firstImageIndex,secondImageIndex,thirdImageIndex ))
     
     
       Products.allImages
       console.log(Products.allImages[firstImageIndex]);
     
       firstImageElement.src = Products.allImages[firstImageIndex].source;
       Products.allImages[firstImageIndex].shown++

       secondImageElement.src = Products.allImages[secondImageIndex].source;
       Products.allImages[secondImageIndex].shown++

       console.log(thirdImageIndex);

       thirdImageElement.src = Products.allImages[thirdImageIndex].source;
       Products.allImages[thirdImageIndex].shown++

       
     }
     
     
    displayThreeImages();



firstImageElement.addEventListener('click',userClick);
secondImageElement.addEventListener('click',userClick);
thirdImageElement.addEventListener('click',userClick);




function userClick(event) {
  
  userAttemptsCounter++;

  console.log(event.target.id);



  if(userAttemptsCounter<maxAttempts){
    
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
    
    let list=document.getElementById('results-list');
    let productResult;
    for(let i=0;i<Products.allImages.length;i++){
      productResult=document.createElement('li');
      list.appendChild(productResult);
      productResult.textContent = Products.allImages[i].product+  ' has ' + Products.allImages[i].votes + ' votes';
    
    thirdImageElement.removeEventListener('click',userClick)
    secondImageElement.removeEventListener('click',userClick);
    firstImageElement.removeEventListener('click',userClick);



    for (let i=0; i<Products.allImages.length; i++){
      productVotes.push(Products.allImages[i].votes)
      productShown.push(Products.allImages[i].shown)
      
    }
    viewChart();


    }
 

  }

}

function viewChart (){

 let ctx = document.getElementById('myChart').getContext('2d');
 let chart = new Chart(ctx, {
     
     type: 'bar',
 
     
     data: {
         labels: productNames,
         datasets: [

           {
             label: 'Product votes',
             backgroundColor: 'rgb(255, 99, 132)',
             borderColor: 'rgb(255, 99, 132)',
             data: productVotes
         },

         {
          label: 'Products shown',
          backgroundColor: 'black',
          borderColor: 'black',
          data: productShown
         }

        
        ]
     },
 
     
     options: {}
 });

}
 



 /* let button = document.getElementById('button');
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
  */
