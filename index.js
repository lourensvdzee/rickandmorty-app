import { createCharacterCard } from './components/card/card.js';
//Ekaterina: import functions due to reactoring
import { createButton } from './components/nav-button/nav-button.js';
import { createPagination } from './components/nav-pagination/nav-pagination.js';


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');

const navigation = document.querySelector('[data-js="navigation"]');

//Ekaterina: const changed due to refactoring
const prevButton = createButton("previous");
navigation.append(prevButton);

//Ekaterina: const changed due to refactoring
const pagination = createPagination();
navigation.append(pagination)

//Ekaterina: const changed due to refactoring
const nextButton = createButton("next");
navigation.append(nextButton);


// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

/* --------------------------------------------------------------------
Fetching data
----------------------------------------------------------------------- */

async function fetchCharacters() {
  try {
    //Lourens added: page variable in URL
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
    const data = await response.json();
    console.log(data.results)
    let newData = data.results

    //Lourens: added max count
    maxPage = data.info.pages;
    // console.log(maxPage, page)

    cardContainer.innerHTML = "";

    newData.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.appendChild(card);

    });

  } catch (error) {
    console.error("error fetching data:", error);
  }
}

console.log("Calling fetchCharacters...");
fetchCharacters();

/* --------------------------------------------------------------------
Pagination starts from here:
----------------------------------------------------------------------- */
//Lourens: added paginationDisplay
// const paginationDisplay = document.getElementById('pagination-display');
pagination.textContent = `Page ${page} of ${maxPage}`;


//functions for prev and next buttons
function handlePrevButtonClick() {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
}

function handleNextButtonClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
}

//eventlisteners for prev and next buttons
prevButton.addEventListener('click', () => {
  handlePrevButtonClick();
  pagination.textContent = `Page ${page} of ${maxPage}`
});

nextButton.addEventListener('click', () => {
  // console.log("i work hehe")
  handleNextButtonClick();
  pagination.textContent = `Page ${page} of ${maxPage}`
});

console.log("Calling fetchCharacters 2...");
fetchCharacters();


//Ekaterina: search bar event listener

searchBar.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log(event.target);

  searchQuery = document.querySelector("input").value;
  fetchCharacters();
})
