import axios from "axios"

const API_URL = "http://localhost:3000/posts"

export const getAllPosts = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const getPostsByUser = async (userId) => {
  const res = await axios.get(`${API_URL}?userId=${userId}`)
  return res.data
}

export const createPost = async (post) => {
  const res = await axios.post(API_URL, post)
  return res.data
}

export const updatePost = async (id, post) => {
  const res = await axios.put(`${API_URL}/${id}`, post)
  return res.data
}

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
}
