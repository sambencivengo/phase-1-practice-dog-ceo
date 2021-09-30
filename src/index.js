//  URLs
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Page Elements
const imageContainer = document.getElementById('dog-image-container');
const listContainer = document.getElementById('dog-breeds');
//

// fetch images
const grabAPI = () => {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => data.message.forEach(postDogs));
};
const grabBreeds = () => {
  const breeds = fetch(breedUrl)
    .then((resp) => resp.json())
    // .then((data) => console.log(data));
    .then((data) => {
      for (const key in data.message) {
        postBreeds(key);
      }
    });
};
//take api images and post them instantly
function postDogs(data) {
  const image = document.createElement('img');
  image.src = data;
  imageContainer.appendChild(image);
}

function postBreeds(data) {
  const ul = document.createElement('ul');
  ul.textContent = data;
  listContainer.appendChild(ul);
}

window.addEventListener('DOMContentLoaded', grabAPI(), grabBreeds());
