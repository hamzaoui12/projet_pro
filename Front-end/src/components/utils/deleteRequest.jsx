import axios from "axios"

const deleteRequest = async (url, id, headers = {}) => {
  return await axios.post(`${process.env.REACT_APP_URL_ROUTE}/${url}/${id}`, { headers: headers })
}

export default deleteRequest