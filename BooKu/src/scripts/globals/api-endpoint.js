import CONFIG from './config';

const API_ENDPOINT = {
  LOGIN: `${CONFIG.BASE_URL}/login`,
  REGISTER: `${CONFIG.BASE_URL}/register`,
  TRANSAKSI: `${CONFIG.BASE_URL}/transaksi`,
  DELETE_TRANSAKSI: (id) => `${CONFIG.BASE_URL}/delete/transaksi/${id}`,
  CHART: (id) => `${CONFIG.BASE_URL}/chart/transaksi/${id}`,
  LIST_TRANSAKSI: `${CONFIG.BASE_URL}/list/transaksi`,

  // IMAGE_RESTAURANT: `https://restaurant-api.dicoding.dev/images/medium`,
  LIST_RESTAURANT: `https://restaurant-api.dicoding.dev/list`,
  DETAIL_RESTAURANT: (id) => `https://restaurant-api.dicoding.dev/detail/${id}`,
  REVIEW_RESTAURANT: `https://restaurant-api.dicoding.dev/review`,
};

export default API_ENDPOINT;
