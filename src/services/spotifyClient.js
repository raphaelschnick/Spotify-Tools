import axios from 'axios'

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + 'd'

  }
})

export default spotifyClient
