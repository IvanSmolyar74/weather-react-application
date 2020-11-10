import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather/'
const API_KEY = 'f33264c1a6e12720d231a8788bfeca2c'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: 'metric'
    }
  })

  return data
}
