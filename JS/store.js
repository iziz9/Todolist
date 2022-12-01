import API_KEY from './apikey.js';

const store = {
  url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    'apikey': `${API_KEY}`,
    'username': 'KDT3_KangHyeonJu'
  },
}

export { store }