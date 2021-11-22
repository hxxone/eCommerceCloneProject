import axios from 'axios';

const BASE_URL = "/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2NiMGUxNjRjY2ZlYjljNDRhNzBmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM4MzI0NywiZXhwIjoxNjM2NjQyNDQ3fQ.k0fxk0r4CtiLIXLvzjT9gXP79yQAM4TiQYBKkNdB6Ns"

export const publicRequest = axios.create({
  baseURL : BASE_URL,
})

export const userRequest = axios.create({
  baseURL : BASE_URL,
  header: {tocken : `Bearer ${TOKEN}` }
})