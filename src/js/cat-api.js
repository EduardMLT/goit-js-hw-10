const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

//Мій ключ доступу до CatAPI
const KEY =
  'live_QWpcFK8RDQNixTwCH3rDYVV7QVkC4CMtlgILvCFvVqu3G5nagZEgozDLY8826ZG3';

//Створюємо список усіх порід котів
const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Створюємо опис конкретної породи кота в breedId
const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Експорт створених функцій
export { fetchBreeds, fetchCatByBreed };
