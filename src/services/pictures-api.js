import axios from 'axios';

// 20659518-d870fa33769225566579aec48;
// https://pixabay.com/api/?key=20659518-d870fa33769225566579aec48&q=yellow+flowers&image_type=photo
//
const fetchPictures = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=20659518-d870fa33769225566579aec48&q=${searchQuery}&image_type=photo&per_page=12&page=${currentPage}`,
    )
    .then(response => response.data.hits);
};
export default { fetchPictures };
