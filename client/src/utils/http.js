import axios from 'axios'

const Axios = axios.create({
  timeout: 1200000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

export default Axios
