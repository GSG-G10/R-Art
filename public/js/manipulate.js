const cardsContainer = document.querySelector('.content');
const searchBtn = document.querySelector('#add-post');

const createElement = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line no-unused-vars
const createCards = (artistName, paintingName, imgUrl) => {
  const card = createElement('div', 'posts', cardsContainer);
  const imge = createElement('img', 'img', card);
  imge.src = imgUrl;
  const artist = createElement('h3', 'artist_name', card);
  artist.textContent = artistName;
  const painting = createElement('p', 'painting', card);
  painting.textContent = paintingName;
};
