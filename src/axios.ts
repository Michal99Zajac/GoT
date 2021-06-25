import axios from 'axios';


/**
 * axios instance for iceandfir API
 */
const instance = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api'
})

export default instance
