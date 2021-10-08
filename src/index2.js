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
        console.log(data.message);
      }
    });
}

function fetchDogs() {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      data.message.forEach((element) => {
        const image = document.createElement('img');
        console.log(element);
        image.src = element;
        imageContainer.append(image);
      });
    });
}

function init() {
  fetchDogs();
  fetchBreeds();
}

document.addEventListener('DOMContentLoaded', init);
