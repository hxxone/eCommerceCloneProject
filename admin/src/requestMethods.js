import axios from 'axios';

const BASE_URL = "/api/"
const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
let TOKEN = ''
if(user.currentUser) TOKEN = user.currentUser.accessToken

export const publicRequest = axios.create({
  baseURL : BASE_URL,
})

export const userRequest = axios.create({
  baseURL : BASE_URL,
  header: {token : `Bearer ${TOKEN}` }
})