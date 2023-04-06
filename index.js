import { createCharacterCard } from './components/card/card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
let searchQuery = "";

/* --------------------------------------------------------------------
Fetching data
----------------------------------------------------------------------- */

async function fetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchQuery}`);
    const data = await response.json();
    console.log(data.results)
    let newData = data.results

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




//search bar 

searchBar.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log(event.target);

  const formData = new FormData(event.target);
  const name = Object.fromEntries(formData);

  searchQuery = document.querySelector("input").value;
  fetchCharacters();
})
