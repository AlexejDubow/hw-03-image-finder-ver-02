import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const USER_KEY = '?key=16116679-c72078e20d7f40e9b0a227bf4';

export default {
  page: 1,
  perPage: 12,
  fetchImages(query) {
    const requestParams = `&q=${query}&page=${this.page}&per_page=${this.perPage}&image_type=all&orientation=horizontal`;
    return axios.get(BASE_URL + USER_KEY + requestParams);
  },
  // incrementPage() {
  //   this.page += 1;
  // },
  // resetPage() {
  //   this.page = 1;
  // },
};
