import axios from "axios"

const getAllRequest = async (url, headers = {}) => {
  return await axios.get(`${process.env.REACT_APP_URL_ROUTE}/${url}`, { headers: headers })
}

export default getAllRequest