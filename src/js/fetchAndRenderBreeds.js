import { loaderEl, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { renderBreedsSelect } from './renderBreedsSelect';
import { renderBreedDesc } from './renderBreedDesc';
import { onChangeSelect } from './index';
import { divPictEl, divDescEl } from './index';

//Функція, що фетчить дані та на їх основі створює розмітку випадаючого списку (працює відразу після завантаження сторінки)
const fetchAndRenderBreeds = () => {
  loaderEl.classList.remove('unvisible');
  fetchBreeds()
    //  .then(breeds => console.log("fetchAndRenderBreeds ", breeds))
    .then(breeds => {
      renderBreedsSelect(breeds);
      console.log("fetchAndRenderBreeds ", breeds[0].name, breeds[0].image.id, breeds[0]);
      // onChangeSelect();
      const markupPicture = `<img class="cat-picture" src="${breeds[0].image.url}" alt="${breeds[0].id}">`;
      const markupDescript = `<h2 class="cat-info-desc-title">${breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breeds[0].temperament}</p>`;
    divPictEl.insertAdjacentHTML('beforeend', markupPicture);
    divDescEl.insertAdjacentHTML('beforeend', markupDescript);
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderEl.classList.add('unvisible');
      breedSelect.classList.remove('unvisible');
    });
};

export { fetchAndRenderBreeds };
