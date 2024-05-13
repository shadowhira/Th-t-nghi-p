import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

/*
* Lưu ý: Đồi với việc sử dụng axios
* Tất cả các function bên dưới các bạn sẽ thấy mình chỉ request và lẩy data từ response luôn, mà không có try catch hay
then catch gì đề bắt lỗi.
* Lý do là vì ở phía Front-end chúng ta không cần thiết làm như vậy đồi với mọi request bởi nó sẽ gây ra việc
dư thừa code catch lỗi quá nhiều.
* Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỏi tập trung tại một nơi bằng cách tận dụng một thứ
cực kỳ mạnh mẽ trong axios đó là Interceptors
* Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc response để xử lý Logic mà
chúng ta muôn.
* (Và ở học phần MERN Stack Advance năng cao học trực tiếp mình sẽ dạy cực kỳ đầy đủ cách xử lý, áp dụng phần
này chuần chình cho các bạn. )
*/

// Change api_root
let api_root = API_ROOT // http://localhost:8017
// console.log('🐛: ➡️ api_root:', api_root)
// api_root = 'https://trello-api-z8ri.onrender.com'

/* Board */
// Hậu tố là API để đánh dấu


// Board
export const createNewBoardAPI = async (title, description, type, userId) => {
  const response = await axios.post(`${api_root}/v1/boards`, { title, description, type, userId })
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  return response.data
}

export const deleteBoardAPI = async (boardId) => {
  const response = await axios.delete(`${api_root}/v1/boards/boardId/${boardId}`)
  return response.data
}

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${api_root}/v1/boards/boardId/${boardId}`)
  return response.data
}

export const fetchListBoardAPI = async () => {
  const response = await axios.get(`${api_root}/v1/boards`)
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${api_root}/v1/boards/boardId/${boardId}`, updateData)
  return response.data
}

export const getListBoardByUserId = async (userId) => {
  const response = await axios.get(`${api_root}/v1/boards/userId/${userId}`, userId)
  return response.data
}

export const pushBoardAPI = async (userId, boardId) => {
  const response = await axios.put(`${api_root}/v1/users/pushBoard`, { userId, boardId })
  return response.data
}

/* Column */
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${api_root}/v1/columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await axios.put(`${api_root}/v1/columns/${columnId}`, updateData)
  return response.data
}

export const deleteColumnDetailsAPI = async (columnId) => {
  const response = await axios.delete(`${api_root}/v1/columns/${columnId}`)
  return response.data
}

/* Cards */

export const moveCardToDifferentColumnAPI = async (updateData) => {
  const response = await axios.put(`${api_root}/v1/boards/supports/moving_card`, updateData)
  return response.data
}

export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${api_root}/v1/cards`, newCardData)
  return response.data
}

export const deleteCardDetailsAPI = async (cardId) => {
  const response = await axios.delete(`${api_root}/v1/cards/${cardId}`)
  return response.data
}

/* Auth */

export const checkLoginAPI = async (email, password) => {
  const response = await axios.post(`${api_root}/v1/auth/login`, { email, password })
  return response.data
}

export const checkSignupAPI = async (email, password, username) => {
  const response = await axios.post(`${api_root}/v1/users`, { email, password, username })
  return response.data
}

export const checkAuthAPI = async () => {
  const response = await axios.post(`${api_root}/v1/auth/checkAuth`)
  return response.data
}

export const checkLogoutAPI = async () => {
  const response = await axios.post(`${api_root}/v1/auth/logout`)
  return response.data
}

export const checkPasswordAPI = async (userId, checkData) => {
  const response = await axios.post(`${api_root}/v1/users/checkPassword/${userId}`, checkData)
  return response.data
}


//Invitation

export const getInvitationByInviteeIdAPI = async (inviteeId) => {
  const response = await axios.get(`${api_root}/v1/invitation/inviteeId/${inviteeId}`)
  return response.data
}

export const updateInvitationAPI = async (invitationId, updateData) => {
  const response = await axios.put(`${api_root}/v1/invitation/${invitationId}`, updateData)
  return response.data
}

/* User */

export const getUserByIdAPI = async (userId) => {
  const response = await axios.get(`${api_root}/v1/users/userId/${userId}`)
  return response.data
}

export const getUserByEmailAPI = async (email) => {
  const response = await axios.get(`${api_root}/v1/users/email?email=${email}`)
  return response.data
}

export const getUsersAPI = async () => {
  const response = await axios.get(`${api_root}/v1/users`)
  return response.data
}

export const updateUserByIdAPI = async (userId, updateData) => {
  const response = await axios.put(`${api_root}/v1/users/userId/${userId}`, updateData)
  return response.data
}

export const deleteUserAPI = async (userId) => {
  const response = await axios.delete(`${api_root}/v1/users/userId/${userId}`)
  return response.data
}

