import axios from "axios"

const API = "http://localhost:3000/comments"

export const getCommentsByPost = async (postId) => {
  const res = await axios.get(
    `http://localhost:3000/comments?postId=${postId}`
  )
  return res.data   // ⭐ bắt buộc
}

export const createComment = async (comment) => {
  await axios.post(API, comment)
}
