const dropDownText = document.querySelector('#breed-dropdown');

const dogImgsCall = async () => {
  const response = await fetch(
    'https://dog.ceo/api/breeds/image/random/4'
  );
  const data = response.json();
  return data;
};

const dogBreedsCall = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = response.json();
  return data;
};

document.addEventListener('DOMContentLoaded', async () => {
  const mainImgContainer = document.querySelector(
    '#dog-image-container'
  );
  let dogImgCall = await dogImgsCall();
  dogImgCall = dogImgCall.message;

  dogImgCall.forEach((element) => {
    const newImg = document.createElement('img');
    newImg.src = element;
    mainImgContainer.appendChild(newImg);
  });
});

dropDownText.addEventListener('click', async () => {
  const breedList = document.querySelector('#dog-breeds');
  let dogBreedCall = await dogBreedsCall();
  dogBreedCall = dogBreedCall.message;
  for (const key in dogBreedCall) {
    if (key.charAt(0) === dropDownText.value) {
      const newListItem = document.createElement('li');
      newListItem.addEventListener('click', (e) => {
        e.target.style.color = 'red';
      });
      newListItem.textContent = key;
      breedList.appendChild(newListItem);
    }
  }
});
