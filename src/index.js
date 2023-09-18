let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyImageUrl = 'http://localhost:3000/toys'
const imageContainer = document.getElementById('toy-collection')



fetch(toyImageUrl)
  .then((response) => response.json())
  .then((data) =>data.forEach((toyObject)=>{
    //grab div with id = toy collection
    const toyContainer = document.getElementById("toy-collection")
    //create h2 
    //create a div with 
    const newDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    img.setAttribute('class','toy-avatar')
    img.alt = toyObject.name
    const para = document.createElement('p')
    const button = document.createElement('button')
    button.setAttribute('class','like-btn')
    button.setAttribute('id',toyObject.id )
    newDiv.append(h2,img,para,button)
    toyContainer.append(newDiv)
    h2.innerText = toyObject.name
    img.src = toyObject.image 
    para.innerText = toyObject.likes
  


    
  

  }))
//create h2 
//create img tag, p tag ,button tag 
//use foreach method to go through array 

