const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const imageContainer = document.getElementById('dog-image-container');
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedList = document.getElementById('dog-breeds');

function fetchBreeds() {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      for (const key in data.message) {
        const breed = document.createElement('li');
        breed.textContent = key;
        breedList.append(breed);
      }
    });
}

function fetchDogs() {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      data.message.forEach((element) => {
        const image = document.createElement('img');
        image.src = element;
        image.style.maxWidth = '300px';
        image.style.height = 'auto';
        imageContainer.append(image);
      });
    });
}

// CLICK COLOR CHANGE DOG BREEDS
breedList.addEventListener('click', (e) => {
  e.target.style.color = 'green';
  e.target.style.fontSize = '20px';
  e.target.style.fontFamily = 'Arial';
});

// filter breeds with select menu
const dropDown = document.getElementById('breed-dropdown');

dropDown.addEventListener('change', (e) => {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.message);
      breedList.innerHTML = '';
      selection = e.target.value;
      for (const dog in data.message) {
        console.log(dog);
        if (dog.charAt(0) === selection) {
          const breed = document.createElement('li');
          breed.textContent = dog;
          breedList.append(breed);
        }
      }
    });
});

function init() {
  fetchDogs();
  fetchBreeds();
}

document.addEventListener('DOMContentLoaded', init);
