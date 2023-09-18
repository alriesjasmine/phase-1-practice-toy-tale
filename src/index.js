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
  .then((data) =>console.log(data))