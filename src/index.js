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

// fetch toys
// function fetchToys() {
//   fetch(http://localhost:3000/toys)
//       .then((response) => response.json())
//       .then(renderToys)
// }
// fetchToys();

const toyForm = document.querySelector('form')

toyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newToy(e.target.name.value, e.target.image.value)
})

function newToy (toyName, toyImg) {
  const div = document.createElement('div');
  const toyheader = document.createElement('h2');
  toyheader.innerText = toyName;

  const img = document.createElement('img');
  img.className = "toy-avatar";
  img.src = toyImg;

  const p = document.createElement('p');
  p.innerText = ` 7 Likes`;


  const btn = document.createElement('button');
  btn.className = "like-btn";
  btn.setAttribute('id', "[toy_id]");
  btn.innerText = "Like ❤️";

  const toyBox = document.querySelector('#toy-collection');
  toyBox.append(div);
  div.appendChild(img, p, btn);
};