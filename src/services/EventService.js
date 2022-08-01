import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('?_page=1' + '&_limit=5')
  },
  getEvent(id) {
    return apiClient.get('/' + id)
  }
}
