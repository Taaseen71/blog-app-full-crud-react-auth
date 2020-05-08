import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'http://192.168.1.151:3000/api',
    development: 'http://192.168.1.151:3000/api'
}

if (window.locaiton.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}


const api = axios.create({
    baseURL: apiUrl
})

export default api;