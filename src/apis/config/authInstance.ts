import axios from 'axios'

const baseUrl = process.env.BASE_URL || 'http://localhost:8080/api/'
const version = process.env.VERSION || 'v1'
const authInstance = axios.create({ baseURL: baseUrl + version })

export default authInstance
