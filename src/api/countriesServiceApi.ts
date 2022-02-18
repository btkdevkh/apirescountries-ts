import axios from 'axios'

const API_URL = 'https://restcountries.com/v3.1/'
const API_URL_NAME = 'https://restcountries.com/v2/name/'

export function getCountries(region: string = '') {
  return axios.get(
    region === 'all' ? 
    API_URL + 'all' : 
    API_URL + 'region/' + region 
  )
    .then(res => res.data)
    .catch(err => err)
}

export function getCountry(name: string) {
  return axios.get(`${API_URL_NAME}/${name}?fullText=true`)
    .then(res => res.data)
    .catch(err => err)
}
