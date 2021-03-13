import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    Accept: 'application/json'
  }
})

export default httpClient
