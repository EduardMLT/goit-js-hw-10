const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

//Мій ключ доступу до CatAPI
const KEY =
  'live_QWpcFK8RDQNixTwCH3rDYVV7QVkC4CMtlgILvCFvVqu3G5nagZEgozDLY8826ZG3';

//Функція, що фетчить список усіх порід котів
const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Функція, що фетчить опис конкретної породи кота по breedId
const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//Іменований експорт функцій
export { fetchBreeds, fetchCatByBreed };
