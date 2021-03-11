// NOTE: this is a synchronous service on purpose
// meant to simplify first intro to Vuex

import axios from 'axios'


const TOY_URL = (process.env.NODE_ENV !== 'development') ?
  'api/toy/' :
  'http://localhost:3030/api/toy/'
  
const KEY = 'TOY_DB';

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy: getEmptyToy,
};

function query(filterBy = {
  name: '',
  type: 'all',
  inStock: true
}) {
  return axios.get(TOY_URL, {
      params: filterBy
    })
    .then(res => res.data)
}

function getById(id) {
  // return storageService.get(KEY, id)
  return axios.get(TOY_URL + id).then(res => res.data)
}

function remove(id) {
  return axios.delete(TOY_URL + id)
    .then(res => res.data)
    .catch(err => {
      throw new Error('error')
    })
}

function save(toy) {
  if (toy._id) {
    return axios.put(TOY_URL + toy._id, toy).then(res => res.data)
  } else {
    return axios.post(TOY_URL, toy).then(res => res.data)
  }
}

function getEmptyToy() {
  return {
    _id: null,
    name: "",
    price: 0,
    type: "",
    createdAt: Date.now(),
    inStock: true
  };
}