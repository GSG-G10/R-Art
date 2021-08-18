const CreateHomeCards = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-undef
    createCards(array[i].artist_name, array[i].painting_name, array[i].image_url);
  }
};
// eslint-disable-next-line no-shadow
const fetchGet = () => {
  fetch('/show')
    .then((res) => res.json())
    .then((res) => {
      CreateHomeCards(res);
    })
    .catch((error) => error);
};
fetchGet();
