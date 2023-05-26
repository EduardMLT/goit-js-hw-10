const breedSelect = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');

const KEY =
  'live_HEs7npt4enTv8IppoFAzotzjElNW9aw61wQB5T2Fw18DPSakhIju9elgFzOgYqmc';

breedSelect.addEventListener('change', onChangeSelect);

function onChangeSelect(event) {
  divEl.innerHTML = '';
  const breed = event.target.value;
  console.log(breed);
  fetchBreedDesc(breed)
    .then(breed => renderBreedDesc(breed))
    // .then(breed => console.log(breed))
    .catch(error => console.log(error));
}

fetchAndRanderBreeds();

//Функція, фетчить API CATS та на основі отриманних данних створює розмітку випадаючого списку
function fetchAndRanderBreeds() {
  fetchBreeds()
    // .then(cats => console.log(cats))
    .then(cats => renderBreedsSelect(cats))
    .catch(error => console.log(error));
}

//Функція, що фетчить список порід котів
function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

//Функція, що фетчить опис конкретноъ породи
function fetchBreedDesc(breed) {
  return fetch(`https://api.thecatapi.com/v1/images/${breed}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

//Функція, що генерує розмітку випадаючого списку
function renderBreedsSelect(cats) {
  const markup = cats
    .map(cat => {
      return `<option value="${cat.reference_image_id}">${cat.name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
}

//Функція, що генерує розмітку орису обраноъ породи кота
function renderBreedDesc(breed) {
  const markup = `<img class="cat-picture" width=400 src="${breed.url}" alt="${breed.id}"><h1>${breed.breeds[0].name}</h1><p>${breed.breeds[0].description}</p>`;
  divEl.insertAdjacentHTML('beforeend', markup);
}
