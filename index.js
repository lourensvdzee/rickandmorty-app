import { createCharacterCard } from './card.js';

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
const searchQuery = "";

/* --------------------------------------------------------------------
Fetching data
----------------------------------------------------------------------- */

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data)

    // Fetch data check
    // console.log("calling fetchCharacters...");
    // fetchCharacters();

    /* --------------------------------------------------------------------
    Sample data Card including the code to temporarily use it
    ----------------------------------------------------------------------- */

    const characterData = {
      name: 'Rick Sanchez',
      status: 'Alive',
      type: '',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      occurrences: 51
    };

    const characterCard = createCharacterCard(characterData);
    cardContainer.appendChild(characterCard);

    /* --------------------------------------------------------------------
    Sample data API
    ----------------------------------------------------------------------- */

    const apiData = {
      "info": {
        "count": 2,
        "pages": 1,
        "next": null,
        "prev": null
      },
      "results": [
        {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1"
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
        },
        {
          "id": 2,
          "name": "Morty Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
            "name": "unknown",
            "url": ""
          },
          "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1"
          ],
          "url": "https://rickandmortyapi.com/api/character/2",
          "created": "2017-11-04T18:50:21.651Z"
        }
      ]
    };

    /* --------------------------------------------------------------------
    Create Character Card
    ----------------------------------------------------------------------- */

    data.results.forEach((person) => {
      const newCard = Card(person);
      renderElement(newCard);
      console.log("Card rendered for", person.name)
    });

  } catch (error) {
    console.error("error fetching data:", error);
  }
}

