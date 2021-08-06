// SELECTORS
const PopUp = document.querySelector(".pop-up");
const cross = document.querySelector(".fa-times");
const gridItems = document.querySelectorAll(".grid-item");
const searchInput = document.querySelector(".gallery input");

//photoGridContainer me .children ki wajah se ye htmlCollection dega.
const photoGridContainer = document.querySelector(
  ".photo-grid-container"
).children;
//converting into array
var gridItemsArray = [...photoGridContainer];
console.log(gridItemsArray);

var popUpHeading = document.querySelector(".pop-up-text").querySelector("h1");
var popUpImage = document.getElementById("pop-up-image");
var popUpTags = document.querySelectorAll(".pop-up-tags li");

console.log(searchInput);

// EVENT LISTENER
cross.addEventListener("click", closePopUp);
gridItems.forEach((gridItem) => {
  gridItem.addEventListener("click", openPopUp);
});
searchInput.addEventListener("click", inputSearch);

//FUNCTIONS

//POP-UP functions
function closePopUp() {
  PopUp.classList.add("close-pop-up");
}

function openPopUp(e) {
  const item = e.target;
  //pop up tags
  let tag1 = item.parentElement.firstElementChild.lastElementChild.children[0];
  let tag2 = item.parentElement.firstElementChild.lastElementChild.children[1];
  let tag3 = item.parentElement.firstElementChild.lastElementChild.children[2];
  popUpTags[0].innerText = tag1.innerText;
  popUpTags[1].innerText = tag2.innerText;
  popUpTags[2].innerText = tag3.innerText;
  //pop up img
  popUpImage.src = item.src;
  //pop up heading
  let targetHeading =
    item.parentElement.firstElementChild.firstElementChild.innerText;
  popUpHeading.innerText = targetHeading;
  PopUp.classList.remove("close-pop-up");
}
// inputSearch // search by input text
function inputSearch() {
  searchInput.onkeyup = function () {
    let inputText = searchInput.value.toUpperCase();
    console.log(inputText);
    //forEachLoop for comparing gridItemName
    gridItemsArray.forEach((gridItem) => {
      let gridItemName =
        gridItem.firstElementChild.firstElementChild.innerText.toUpperCase();
      if (gridItemName.indexOf(inputText) < 0) {
        gridItem.style.display = "none";
      } else {
        gridItem.style.display = "block";
      }
    });
  };
}

//
