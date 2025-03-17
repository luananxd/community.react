import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const http = applyCaseMiddleware(
  axios.create({
    baseURL: 'https://api.nasa.gov',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }),
  {
    ignoreHeaders: true,
  },
)

export default http
