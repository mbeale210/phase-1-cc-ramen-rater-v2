// index.js
const API = "http://localhost:3000/ramens";
const ramenMenuDiv = document.getElementById("ramen-menu");
const ramenImg = document.getElementById("detail-image");
const ramenName = document.getElementById("name");
const ramenRest = document.getElementById("restaurant");
const ramenRat = document.getElementById("rating-display");
const ramenComm = document.getElementById("comment-display");
const ramenForm = document.getElementById("new-ramen");

ramenForm.addEventListener('submit', newRamen);



function displayDetails(ramen) {
  ramenImg.src = ramen.image;
  ramenImg.alt = ramen.name;
  ramenName.textContent = ramen.name;
  ramenRest.textContent = ramen.restaurant;
  ramenRat.textContent = ramen.rating;
  ramenComm.textContent = ramen.comment;
}

function newRamen(e) {
  e.preventDefault();
  const newReveiw = {
    name: e.target.name.value,
    rating: e.target.rating.value,
    restaurant: e.target.restaurant.value,
    comment: e.target["new-comment"].value,
    image: e.target.image.value,
  };
  function ramenAppear(ramen) {
    const pic = document.createElement("img");
    pic.src = ramen.image;
    ramenMenuDiv.append(pic);

    pic.addEventListener("click", (e) => displayDetails(ramen));
  }
  ramenAppear(newReveiw);
  ramenForm.reset();
}

// Callbacks
const handleClick = () => {
  return displayDetails();
  // Add code
};
const addSubmitListener = () => {
  ramenForm.addEventListener("submit", newRamen);
  
  // Add code
}

const displayRamens = () => {
  fetch(API)
    .then((res) => res.json())
    .then(ramenInfo);

  function ramenInfo(data) {
    data.forEach(ramenAppear);
  }

  function ramenAppear(ramen) {
    const pic = document.createElement("img");
    pic.src = ramen.image;
    ramenMenuDiv.append(pic);

    pic.addEventListener("click", (e) => displayDetails(ramen));
  }
  // Add code
};


const main = () => {
  return displayRamens ();
  return addSubmitListener();
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
