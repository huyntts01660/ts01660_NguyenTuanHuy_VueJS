import axios from "axios"

const API_URL = "http://localhost:3000/users"

export const login = async (email, password) => {
  const res = await axios.get(
    `${API_URL}?email=${email}&password=${password}`
  )
  return res.data
}

export const register = async (user) => {
  const res = await axios.post(API_URL, user)
  return res.data
}
