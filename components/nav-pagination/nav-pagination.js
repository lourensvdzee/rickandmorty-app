import { prevButton, nextButton, pagination } from './index.js';

let currentPage = 1;

function handlePrevButtonClick() {
    console.log('Previous button clicked');
    // your code for handling the previous button click goes here
}

function handleNextButtonClick() {
    console.log('Next button clicked');
    // your code for handling the next button click goes here
}

prevButton.addEventListener('click', () => {
    console.log('Previous button event listener executed');
    handlePrevButtonClick();
});

nextButton.addEventListener('click', () => {
    console.log('Next button event listener executed');
    handleNextButtonClick();
});