const API_KEY = '43948978-860dfecfaa788bc4b5c828749';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = query  => {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY ,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};